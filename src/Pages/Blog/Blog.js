import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>#1 What is cors?</Accordion.Header>
        <Accordion.Body>
          Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based //
          mechanism that allows a server to indicate any origins (domain,
          scheme, // or port) other than its own from which a browser should
          permit loading // resources. CORS also relies on a mechanism by which
          browsers make a // "preflight" request to the server hosting the
          cross-origin resource, in // order to check that the server will
          permit the actual request. In that // preflight, the browser sends
          headers that indicate the HTTP method and // headers that will be used
          in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          #2 Why are you using firebase? What other options do you have to
          implement authentication?
        </Accordion.Header>
        <Accordion.Body>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. <br />
          Get Started with Firebase Authentication on Websites On this page. Add
          and initialize the Authentication SDK. (Optional) Prototype and test
          with Firebase Local Emulator Suite. Sign up new users. Sign in
          existing users. Set an authentication state observer and get user
          data. Next steps.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>#3 How does the private route work?</Accordion.Header>
        <Accordion.Body>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property. <br />
          <br /> Select the Start button, then type settings. Select Settings >
          Network & internet > Wi-Fi. On the Wi-Fi settings screen, select
          Manage known networks, and then select the Wi-Fi network you want to
          change. On the Wi-Fi network screen, under Network profile type,
          select Public (Recommended) or Private.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>
          #4 What is Node? How does Node work?
        </Accordion.Header>
        <Accordion.Body>
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive. <br />
          <br />
          Node. js is an open-source, cross-platform JavaScript runtime
          environment and library for running web applications outside the
          client's browser. Ryan Dahl developed it in 2009, and its latest
          iteration, version 15.14, was released in April 2021. Developers use
          Node.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
