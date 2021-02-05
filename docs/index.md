---
hero:
  title: MLModelCI
  desc: Complete MLOps platform for managing, converting, profiling, and deploying MLaaS
  actions:
    - text: Getting Started
      link: /document
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Continuous Integration
    desc: MLModelCI applys the concept of DevOps in software engineering, and can help users to continuous manage the lifecycle of ML services.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: From Research to Product
    desc: Bridge the gaps between research models and Industrial applications, MLModelCI offers a set of tools to help AI landing without pains.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: Automatic Profiling
    desc: Simulates the behavior of online ML services, and provides a detailed report about model runtime performance in production.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png
    title: Model Visualizer/Editor
    desc: MLModelCI supports Deep learning model structures visualization, and can edit and fine-tune the models like Microsoft Office.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b3e102cd-5dad-4046-a02a-be33241d1cc7/kj9t8oji_w144_h144.png
    title: Self-evolution Pipelines
    desc: With the help of runtime model monitoring and a powerful continual learning engine, MLModelCI allows you to update and maintain the high performance online services.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/f093e060-726e-471c-a53e-e988ed3f560c/kj9t9sk7_w144_h144.png
    title: Team Collaboration
    desc: MLModelCI can manage and record the model history, and share the workspace with your teammates, makes team work clear and easily.
footer: MLModelCI | Copyright © 2020<br />
---

## MLModelCI

MLModelCI is a complete MLOps platform for managing, converting, profiling, and deploying MLaaS (Machine Learning-as-a-Service), bridging the gap between current ML training and serving systems.

### System Workflow

<div style="text-align:center"><img src="../assets/images/modelci_workflow.svg" /></div>

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
