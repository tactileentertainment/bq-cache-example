# bq-cache-example
Minimal example showing unexpected cached query

NB: For obvious reasons the keyFile have been omitted.

Running the `start` script with the affected keyFile will produce an output like the following
```
Job .xxx. started.
{
  creationTime: '1683190816265',
  startTime: '1683190816343',
  endTime: '1683190816486',
  totalBytesProcessed: '0',
  query: {
    totalBytesProcessed: '0',
    totalBytesBilled: '0',
    cacheHit: true,
    statementType: 'SELECT'
  }
}
Rows:
{ row_count: 1 }
```
