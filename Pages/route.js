import Layout from '../components/Layout';
import Photos from '../components/Photos';
const route = (props) => (
    <Layout>

        <div className="container-fluid">
            <div className="next-outer">First routing page</div>
            <Photos data={props.data}/>
        </div>
        <style jsx>{`
            .next-outer {
                font-size:1.1em;
                color: red;
            }
        `}
        </style>
    </Layout>
);
export async function getStaticProps(context) {
    const res =  await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    return {
      props: {data}
    }
}
export default route;