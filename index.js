// Import the Google Cloud client library using default credentials
const {BigQuery} = require('@google-cloud/bigquery');

const bigquery = new BigQuery({
    projectId: 'flowergarden-analytics',
    keyFilename: __dirname + '/tactile-dashboard.json'
});

async function query() {
  const query = `SELECT count(*) as row_count
                            FROM \`flowergarden-analytics.raw_events_dev.adjustAttribution_885d1a0cbef26bcbb3a2fef9a57d7b20\` WHERE _partitionDate IS NOT NULL;`

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
  const options = {
    query: query,
    location: 'US',
  };

  // Run the query as a job
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);
  console.log(job.metadata.statistics);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  // Print the results
  console.log('Rows:');
  rows.forEach(row => console.log(row));
}

query();