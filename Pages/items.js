import Layout from '../components/Layout';
import Foods from '../components/foods';
const items = (props) => (
    <Layout>

        <div className="container-fluid">
            <div className="next-outer">Second routing page</div>
            <Foods data={props.data}/>
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
    const res =  await fetch("http://starlord.hackerearth.com/recipe");
    const data = await res.json();
    return {
      props: {data}
    }
}
export default items;