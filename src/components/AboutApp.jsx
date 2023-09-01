function AboutApp() {
  return (
    <>
      <h1 class="text-center">About App</h1>
      <br></br>
      <h3 class="text-center">Created for my SWE 4633 Class</h3>
      <br></br>
      <h5 class="text-center">
        My website uses the React.JS framework to help me build my site in a
        quick and clean way. <br></br>I also implement bootstrap for quick and clean
        styling. <br></br>I followed AWS's offical guide for hosting react webpages. This guide  can be found  <a target="_blank" href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro">here</a>.
        <p>(I only followed the guide linked, the other guides are outside the scope of the assignment)</p>

        </h5>
        <h5 class="text-center">
        In react I use the react-router library to help reduce load
        times by only loading new content.<br></br> So whenever a page is updated, it
        only has to load the new content, and doesn’t reload the Nav Bar.
        </h5>
        <br></br>
        <h5 class="text-center">
        I use AWS to host this webpage by running an Amplify instance and My React website
        is broken up into 3 components, the Navigation bar, the Image page, and
        the About me page. 
        </h5>
        <h5 class="text-center">
        The image page contains a picture of a chess board. This picture is hosted in an AWS Bucket
        </h5>
        <br></br>
        <h5 class="text-center">
        The About me page is just a simple write up about myself and my hobbies.
        </h5>
    </>
  );
}
export default AboutApp;
