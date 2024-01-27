import Header from "./Header/Header"

const Home = () => {
    return (
        <div>
            <Header />

            <div style={{ width: "100%", background: `url("/assets/bg2.png") rgba(0,0,0,0.05) no-repeat`, minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "darken" }}>
                <div className="">
                    <h1>Welcome To Doctor Appointment System</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
