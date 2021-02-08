---
toc: menu
sidemenu: false
nav:
  title: Benchmark
  path: /benchmark
  order: 2
---

# Benchmark

Reference

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

export default () => (
  <div style={{ width: '100%', display: 'flex' }}>
    <div style={{ marginTop: 16, width: '49%' }}>
      <ReactFlow elements={elements} />
    </div>
    <Card
      style={{ marginTop: 16, width: '49%' }}
      type="inner"
      title="InferBench: Understanding Deep Learning Inference Serving with an Automatic Benchmarking System."
      extra={<a href="https://arxiv.org/abs/2011.02327">PDF</a>}
    >
      H Zhang, Y Huang, Y Wen, J Yin, K Guan.(2020)
      <p style={{ color: '#52527a' }}>arXiv preprint arXiv:2011.02327</p>
    </Card>
  </div>
);
```

Here are some example benchmarking results:

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import data from '../../assets/data/data.json';

const bmk_data = JSON.parse(data);

// const BenchmarkData = JSON.parse('../../assets/data/data.json');

const bmk_columns = [
  {
    title: 'Model Name',
    dataIndex: 'model_name',
    key: 'model_name',
  },
  {
    title: 'Device Name',
    dataIndex: 'device_name',
    key: 'device_name',
  },
  {
    title: 'Benchmark Mode',
    dataIndex: 'mode',
    key: 'mode',
  },
  {
    title: 'Concurrency',
    dataIndex: 'concurrency',
    key: 'concurrency',
  },
  {
    title: 'Serve Framework',
    dataIndex: 'serve_image',
    key: 'serve_image',
  },
  {
    title: 'Request Num',
    dataIndex: 'request_num',
    key: 'request_num',
  },
  {
    title: 'Batch Size',
    dataIndex: 'batch_size',
    key: 'batch_size',
  },
  {
    title: 'P95 Latency',
    dataIndex: 'p95_latency',
    key: 'p95_latency',
  },
  {
    title: 'P99 Latency',
    dataIndex: 'p95_latency',
    key: 'p99_latency',
  },
  {
    title: 'Avg GPU Utilization',
    dataIndex: 'all_batch_avg_util',
    key: 'all_batch_avg_util',
  },
  {
    title: 'Avg Throughput',
    dataIndex: 'all_batch_throughput',
    key: 'all_batch_throughput',
  },
];

export default () => (
  <div>
    <Table dataSource={bmk_data} columns={bmk_columns} />
  </div>
);
```
