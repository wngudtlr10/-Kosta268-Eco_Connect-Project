import React from "react";
import "./Main.css";
/*import { PaperAirplaneIcon, CameraIcon, DocumentIcon } from '@heroicons/react/24/solid'*/
import Layout from "./components/Layout/Layout";
import Card from "./components/Card/Card";

function Main() {
    return (
        <Layout>
            <div className="main-container">
                <h1 className="main-title">Welcome to the Main Page</h1>
                <div className="main-desc">
                    <p>This is your new cool Main page.</p>
                    <p>You can add more contents here.</p>
                    <p>기본 루트 경로</p>
                </div>
            </div>
            {/*<section className="card-container">*/}
            {/*    <Card*/}
            {/*        body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'*/}
            {/*        title='Read Post Now'*/}
            {/*        image='https://source.unsplash.com/random'*/}
            {/*        badge={{*/}
            {/*            text: "New Post",*/}
            {/*            filled: false,*/}
            {/*        }}*/}
            {/*        indicator="Sold"*/}
            {/*        btn={{*/}
            {/*            text: "Read Post",*/}
            {/*            href: '#',*/}
            {/*            type: 'primary',*/}
            {/*            filled: true,*/}
            {/*            // icon: <DocumentIcon/>*/}
            {/*        }}/>*/}
            {/*    <Card*/}
            {/*        body='Irure culpa quis in mollit nulla et velit velit ullamco ipsum aliquip eu amet.'*/}
            {/*        title='This is a Great Photo!'*/}
            {/*        image='https://source.unsplash.com/random/500X400'*/}
            {/*        badge={{*/}
            {/*            text: "New Photo Alert",*/}
            {/*            filled: false,*/}
            {/*        }}*/}
            {/*        indicator="New"*/}
            {/*        subtitle='Get your photo now'*/}
            {/*        btn={{*/}
            {/*            text: "Button",*/}
            {/*            href: '#',*/}
            {/*            type: 'secondary',*/}
            {/*            filled: true,*/}
            {/*            //icon: <CameraIcon/>*/}
            {/*        }}/>*/}
            {/*    <Card*/}
            {/*        body='hi'*/}
            {/*        title='hi2'*/}
            {/*        btn={{*/}
            {/*            text: "Button",*/}
            {/*            href: '#',*/}
            {/*            type: 'primary',*/}
            {/*            filled: false,*/}
            {/*        }}/>*/}
            {/*</section>*/}
        </Layout>
    );
}

export default Main;