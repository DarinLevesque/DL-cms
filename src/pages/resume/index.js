import React from "react";
import Layout from '../../components/Layout'

const Index = () => {
    return (
        <Layout>
            <section className="section columns">
                <div className="column">
                    <div class="tabs is-toggle is-fullwidth" id="tabs">
                      <ul>
                        <li class="is-active" data-tab="1">
                          <a>
                            <span class="icon is-small"><i class="fa fa-image"></i></span>
                            <span>Pictures</span>
                          </a>
                        </li>
                        <li data-tab="2">
                          <a>
                            <span class="icon is-small"><i class="fa fa-music"></i></span>
                            <span>Music</span>
                          </a>
                        </li>
                        <li data-tab="3">
                          <a>
                            <span class="icon is-small"><i class="fa fa-film"></i></span>
                            <span>Videos</span>
                          </a>
                        </li>
                        <li data-tab="4">
                          <a>
                            <span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
                            <span>Documents</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div id="tab-content">
                      <p class="is-active" data-content="1">
                        Pictures
                      </p>
                      <p data-content="2">
                        Music
                      </p>
                      <p data-content="3">
                        Videos
                      </p>
                      <p data-content="4">
                        Documents
                      </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index
