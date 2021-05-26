---
hero:
  title: Machine Learning Model CI
  desc: Complete MLOps platform for managing, converting, profiling, and deploying MLaaS
  actions:
    - text: Getting Started
      link: /document
features:
  - icon: https://raw.githubusercontent.com/MLModelCI/MLModelCI.github.io/master/assets/images/1.svg
    title: Continuous Integration
    desc: MLModelCI applys the concept of DevOps in software engineering, and can help users to continuous manage the lifecycle of ML services.
  - icon: https://raw.githubusercontent.com/MLModelCI/MLModelCI.github.io/master/assets/images/2.svg
    title: From Research to Product
    desc: Bridge the gaps between research models and Industrial applications, MLModelCI offers a set of tools to help AI landing without pains.
  - icon: https://raw.githubusercontent.com/MLModelCI/MLModelCI.github.io/master/assets/images/3.svg
    title: Automatic Profiling
    desc: Simulates the behavior of online ML services, and provides a detailed report about model runtime performance in production.
  - icon: https://raw.githubusercontent.com/MLModelCI/MLModelCI.github.io/master/assets/images/4.svg
    title: Model Visualizer/Editor
    desc: MLModelCI supports Deep learning model structures visualization, and can edit and fine-tune the models like Microsoft Office.
  - icon: https://raw.githubusercontent.com/MLModelCI/MLModelCI.github.io/master/assets/images/5.svg
    title: Self-evolution Serving
    desc: With the help of runtime model monitoring and a powerful continual learning engine, MLModelCI allows you to update and maintain the high performance online services.
  - icon: https://raw.githubusercontent.com/MLModelCI/MLModelCI.github.io/master/assets/images/6.svg
    title: Team Collaboration
    desc: MLModelCI can manage and record the model history, and share the workspace with your teammates, makes team work clear and easily.
footer: MLModelCI | Copyright © 2020<br />
---

## MLModelCI

MLModelCI is a complete MLOps platform for managing, converting, profiling, and deploying MLaaS (Machine Learning-as-a-Service), bridging the gap between current ML training and serving systems.

### Make your life easier!

Compare with the traditional AI landing workflow, MLModelCI greatly simplifies the process and provides easy-to-expandable interfaces.

```tsx
/**
 * inline: true
 */
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1-input',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'Pre-trained ML Models' },
    position: { x: 0, y: 80 },
    style: {
      background: '#FFC1C1',
      color: '#333',
      fontSize: 16,
      border: '2px solid #696969',
    },
  },
  {
    id: '2-mlmodelci',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'MLModelCI Automatic Workflow' },
    position: { x: 210, y: 0 },
    style: {
      background: '#46D5E6',
      color: '#333',
      border: '2px solid #696969',
      width: 450,
      textAlign: 'center',
      height: 50,
      fontSize: 16,
    },
  },
  {
    id: '3-modeldb',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Manage Models' },
    position: { x: 210, y: 160 },
    style: {
      background: '#FFFF',
      color: '#333',
      fontSize: 16,
      border: '2px solid #696969',
    },
  },
  {
    id: '4-online-service',
    sourcePosition: 'bottom',
    targetPosition: 'left',
    data: { label: 'Online ML Services' },
    position: { x: 720, y: 60 },
    style: {
      background: '#FFD700',
      color: '#333',
      border: '2px solid #696969',
      width: 180,
      height: 48,
      fontSize: 16,
    },
  },
  {
    id: '5-convert',
    sourcePosition: 'left',
    targetPosition: 'right',
    data: { label: 'Optimize Models' },
    position: { x: 380, y: 160 },
    style: {
      background: '#FFFF',
      color: '#333',
      fontSize: 16,
      border: '2px solid #696969',
    },
  },
  {
    id: '6-finetune',
    sourcePosition: 'right',
    targetPosition: 'top',
    data: { label: 'Updating Models' },
    position: { x: 550, y: 240 },
    style: {
      background: '#FFA54F',
      color: '#333',
      fontSize: 16,
      border: '2px solid #696969',
    },
  },
  {
    id: '7-test',
    sourcePosition: 'left',
    targetPosition: 'top',
    data: { label: 'Conduct A/B Testing' },
    position: { x: 720, y: 240 },
    style: {
      background: '#FFA54F',
      color: '#333',
      fontSize: 16,
      width: 180,
      border: '2px solid #696969',
    },
  },
  {
    id: '8-serving',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'Deploy Models' },
    position: { x: 720, y: 160 },
    style: {
      background: '#FFFF',
      color: '#333',
      fontSize: 16,
      width: 180,
      border: '2px solid #696969',
    },
  },
  {
    id: '9-monitor',
    class: 'normal_node_style',
    sourcePosition: 'left',
    targetPosition: 'bottom',
    data: { label: 'Monitor Models' },
    position: { x: 550, y: 160 },
    style: {
      background: '#FFFF',
      color: '#333',
      fontSize: 16,
      border: '2px solid #696969',
    },
  },
  // Lines
  {
    id: 'l-1',
    source: '1-input',
    type: 'smoothstep',
    target: '3-modeldb',
    label: 'traditional',
  },
  {
    id: 'l-2',
    source: '1-input',
    type: 'smoothstep',
    target: '2-mlmodelci',
    label: 'modelci',
    animated: true,
  },
  {
    id: 'l-3',
    source: '2-mlmodelci',
    type: 'smoothstep',
    target: '4-online-service',
    animated: true,
  },
  {
    id: 'l-4',
    source: '3-modeldb',
    type: 'smoothstep',
    target: '5-convert',
  },
  {
    id: 'l-5',
    source: '5-convert',
    type: 'smoothstep',
    target: '9-monitor',
  },
  {
    id: 'l-6',
    source: '9-monitor',
    type: 'smoothstep',
    target: '6-finetune',
  },
  {
    id: 'l-7',
    source: '6-finetune',
    type: 'smoothstep',
    target: '7-test',
  },
  {
    id: 'l-8',
    source: '7-test',
    type: 'smoothstep',
    target: '8-serving',
  },
  {
    id: 'l-9',
    source: '8-serving',
    type: 'smoothstep',
    target: '4-online-service',
    animated: true,
  },
];
export default () => (
  <div style={{ height: 300, marginTop: 50 }}>
    <ReactFlow
      elements={elements}
      nodesDraggable={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
    />
  </div>
);
```

<!-- System OverView -->
<!-- <div style="text-align:center"><img src="../assets/images/modelci_workflow.svg" /></div> -->

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
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="A Serverless Cloud-Fog Platform for DNN-Based Video Analytics with Incremental Learning."
      extra={<a href="https://arxiv.org/abs/2102.03012">PDF</a>}
    >
      H Zhang, M Shen, Y Huang, Y Wen, Y Luo, G Gao, K Guan.(2020)
      <p style={{ color: '#52527a' }}>arXiv preprint arXiv:2102.03012</p>
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="ModelPS: An Interactive and Collaborative Platform for Editing Pre-trained Models at Scale"
      extra={<a href="https://arxiv.org/abs/2105.08275">PDF</a>}
    >
      Y Li, H Zhang, S Jiang, F Yang, Y Wen, Y Luo (2021)
      <p style={{ color: '#52527a' }}>arXiv preprint arXiv:2105.08275</p>
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Hysia: Serving DNN-Based Video-to-Retail Applications in Cloud"
      extra={<a href="https://arxiv.org/abs/2006.05117">PDF</a>}
    >
      H Zhang, Y Li, Q Ai, Y Luo, Y Wen, Y Jin, NBD Ta (2020)
      <p style={{ color: '#52527a' }}>
        Proceedings of the 28th ACM International Conference on Multimedia,
        4457-4460
      </p>
    </Card>
  </div>
);
```
