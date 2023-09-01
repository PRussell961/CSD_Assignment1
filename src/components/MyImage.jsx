function AboutApp() {
    return (
        <>
        <h1 class="text-center">My Image</h1>

        <h5 class="text-center">This image is hosted in an AWS S3 bucket!</h5>
        
        <img src="https://myiamgesswe.s3.us-east-2.amazonaws.com/chessboard.png" alt="Something went wrong!" class="img-thumbnail"></img>
        </>
    );
    }
export default AboutApp;