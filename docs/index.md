---
hero:
  title: MLModelCI
  desc: Complete MLOps platform for managing, converting, profiling, and deploying MLaaS
  actions:
    - text: Getting Started
      link: /document
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Housekeeper
    desc: Housekeeper provides a refined management for model (service) registration, deletion, update and selection.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: Converter
    desc: Converter is designed to convert models to serialized and optimized formats so that the models can be deployed to cloud. Support Tensorflow SavedModel, ONNX, TorchScript, TensorRT.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: Profiler
    desc: Profiler simulates the real service behavior by invoking a gRPC client and a model service, and provides a detailed report about model runtime performance (e.g. P99-latency and throughput) in production environment.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png
    title: Dispatcher
    desc: Dispatcher launches a serving system to load a model in a containerized manner and dispatches the MLaaS to a device. Support Tensorflow Serving, Trion Inference Serving, ONNX runtime, Web Framework (e.g., FastAPI).
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b3e102cd-5dad-4046-a02a-be33241d1cc7/kj9t8oji_w144_h144.png
    title: Controller
    desc: Controller receives data from the monitor and node exporter, and controls the whole workflow of our system.
footer: MLModelCI | Copyright © 2020<br />
---

## MLModelCI

MLModelCI is a complete MLOps platform for managing, converting, profiling, and deploying MLaaS (Machine Learning-as-a-Service), bridging the gap between current ML training and serving systems.

### System Workflow

<div style="text-align:center"><img src="https://mlmodelci.github.io/website/assets/img/modelci_workflow.svg" /></div>

### Publications

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

export default () => (
  <div>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="MLModelCI: An Automatic Cloud Platform for Efficient MLaaS."
      extra={
        <div>
          <a href="https://doi.org/10.1145/3394171.3414535">PDF</a>{' '}
          <a href="https://arxiv.org/abs/2011.02327">Github</a>
        </div>
      }
    >
      H Zhang, Y Li, Y Huang, Y Wen, J Yin, K Guan. (2020)
      <p style={{ color: '#52527a' }}>
        Proceedings of the 28th ACM International Conference on Multimedia,
        4453--4456
      </p>
    </Card>
    <Card
      style={{ marginTop: 16 }}
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