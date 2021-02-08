---
toc: menu
sidemenu: false
nav:
  title: Contact
  path: /contact
  order: 3
---

# About Us

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Avatar, Card } from 'antd';
import 'antd/dist/antd.css';
import '../app.less';

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    <Card
      style={{
        marginTop: 16,
        width: '49%',
        flex: 1,
        minWidth: '300px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <Avatar
          size={100}
          src={'https://huaizhengzhang.github.io/self-avatar.png'}
        />
        <div
          style={{
            marginLeft: 50,
            marginTop: 20,
            color: '#454d64',
            fontSize: '20px',
            lineHeight: 1.60625,
          }}
        >
          Huaizheng Zhang
          <p style={{ fontSize: '16px' }}> Co-founder</p>
        </div>
      </div>

      <p
        style={{
          marginTop: 20,
          color: '#454d64',
          fontSize: '15px',
          lineHeight: 1.60625,
        }}
      >
        Huaizheng Zhang is a PhD student at Nanyang Technological University,
        Singapore. He is a Co-founder of MLModelCI, created and maintained{' '}
        <a herf="https://github.com/HuaizhengZhang/Awesome-System-for-Machine-Learning">
          Awesome-System-for-Machine-Learning
        </a>{' '}
        on GitHub, which has thousands of stars. He also participated in and
        maintained a number of open-source projects in AI and System. He did an
        internship at ByteDance AI Lab and has been a certified instructor of
        NVIDIA deep learning. Published and wrote more than 10 papers related to
        machine learning algorithms and systems.{' '}
        <a herf="https://huaizhengzhang.github.io/">Here</a> is the link to his
        personal website.
      </p>
    </Card>
    <Card
      style={{
        marginTop: 16,
        marginLeft: '2%',
        width: '49%',
        flex: 1,
        minWidth: '300px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <Avatar
          size={100}
          src={'https://i.loli.net/2021/02/08/CtOyWl42cYUfQgN.jpg'}
        />
        <div
          style={{
            marginLeft: 50,
            marginTop: 20,
            color: '#454d64',
            fontSize: '20px',
            lineHeight: 1.60625,
          }}
        >
          Yizheng Huang
          <p style={{ fontSize: '16px' }}> Co-founder</p>
        </div>
      </div>

      <p
        style={{
          marginTop: 20,
          color: '#454d64',
          fontSize: '15px',
          lineHeight: 1.60625,
        }}
      >
        Yizheng Huang is a researcher in Nanyang Technological University, also
        a main contributor of MLModelCI. Berfore working in Singapore, he is a
        co-founder of boxfriend, a charity enterprise aims to build lightweight
        and environmental friendly container buildings for the left-behind
        children in China. He did an internship at Microsoft Research Asia and
        Open Data Kit (Google SoC), and has achieved over 5K stars in Github
        when he is a undergrad student. Currently, he is interested in building
        large-scale systems for AI landing.
      </p>
    </Card>
  </div>
);
```

# Contact Us

- For startup and project details, please send email to huaizhen001@e.ntu.edu.sg.
- For requesting full benchmarking results and benchmarking system demo, please send email to yizheng.huang@ntu.edu.sg.
