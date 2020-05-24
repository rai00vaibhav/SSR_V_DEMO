import Layout from '../components/Layout'
const home = () => (
    <Layout>
        <div className="next-body">
            <h1>Welcome to Next JS</h1>
            
        </div>
        <style jsx>{`
            .next-body {
                height: calc(100vh - 48px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #303846;
            }
            .next-body > h1 {
                color:#fff;
            }
        `}
        </style>
    </Layout>
);
export default home;