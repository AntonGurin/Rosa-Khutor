import Link from "next/link"


export default  function ErrorPage() {
    return (
        <>
            <div style={{ width: '600px', position: 'absolute',
                top: '50%', left: '65%',transform: 'translate(-50%, -50%'}}>
                <h1> Error 404! </h1>
                <p style={{marginLeft: '-50px'}}> Get back to the home page in the left corner  </p>
            </div>
            <p><Link href={'/'}>Home Page</Link></p>
        </>
    )
}