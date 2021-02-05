---
toc: menu
sidemenu: false
nav:
  title: Benchmark
  path: /benchmark
  order: 2
---

# Benchmark

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const example_benchmarking_data = [
  {
    key: '1',
    model_name: 'XLNet (large cased)',
    cpu: 'Intel(R) Xeon(R) E5-2698v4 CPU',
    gpu: 'Nvidia Tesla V100',
    avg_latency: '19.104',
    p50_latency: '19.104',
    p95_latency: '19.104',
    p99_latency: '19.104',
    avg_qps: '19.104',
    bs: '1',
    avg_mem: '19.104%',
    avg_gpu: '19.104%',
    avg_cpu: '19.104%',
    duration: '19.104',
  },
  {
    key: '2',
    model_name: 'XLNet (large cased)',
    cpu: 'Intel(R) Xeon(R) E5-2698v4 CPU',
    gpu: 'Nvidia Tesla V100',
    avg_latency: '19.104',
    p50_latency: '19.104',
    p95_latency: '19.104',
    p99_latency: '19.104',
    avg_qps: '19.104',
    bs: '1',
    avg_mem: '19.104%',
    avg_gpu: '19.104%',
    avg_cpu: '19.104%',
    duration: '19.104',
  },
];

const bmk_columns = [
  {
    title: 'Model Name',
    dataIndex: 'model_name',
    key: 'model_name',
  },
  {
    title: 'CPU',
    dataIndex: 'cpu',
    key: 'cpu',
  },
  {
    title: 'GPU',
    dataIndex: 'gpu',
    key: 'gpu',
  },
  {
    title: 'Avg Latency (ms)',
    dataIndex: 'avg_latency',
    key: 'avg_latency',
  },
  {
    title: 'P50 Latency (ms)',
    dataIndex: 'p50_latency',
    key: 'p50_latency',
  },
  {
    title: 'P95 Latency (ms)',
    dataIndex: 'p95_latency',
    key: 'p95_latency',
  },
  {
    title: 'P99 Latency (ms)',
    dataIndex: 'p99_latency',
    key: 'p99_latency',
  },
  {
    title: 'Avg Throughput (req/sec)',
    dataIndex: 'avg_qps',
    key: 'avg_qps',
  },
  {
    title: 'Batch Size',
    dataIndex: 'bs',
    key: 'bs',
  },
  {
    title: 'Avg Memory Utilization',
    dataIndex: 'avg_mem',
    key: 'avg_mem',
  },
  {
    title: 'Avg GPU Utilization',
    dataIndex: 'avg_gpu',
    key: 'avg_gpu',
  },
  {
    title: 'Avg CPU Utilization',
    dataIndex: 'avg_cpu',
    key: 'avg_cpu',
  },
  {
    title: 'Test Duration (s)',
    dataIndex: 'duration',
    key: 'duration',
  },
];

export default () => (
  <div>
    <Table dataSource={example_benchmarking_data} columns={bmk_columns} />
  </div>
);
```
