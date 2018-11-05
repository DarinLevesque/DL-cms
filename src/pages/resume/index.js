import React from "react";
import Layout from '../../components/Layout'

function openTab(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.className += " active";
}

export default class ResumePage extends React.Component {
  render() {
        return (
            <Layout>
                <section className="section columns">
                    <div className="column">
                        <div class="tabs is-centered">
                            <ul>
                              <li id="tablinks">
                                <a onclick="openTab(event, 'Overview')">
                                <span class="icon is-large"><i class="fa fa-2x fa-html5 blue"></i></span>
                                <span>Overview</span>
                              </a>
                              </li>
                              <li id="tablinks">
                                <a onclick="openTab(event, 'Details')">
                                <span class="icon is-large"><i class="fa fa-2x fa-tablet blue"></i></span>
                                <span>Details</span>
                              </a>
                              </li>
                              <li id="tablinks">
                                <a onclick="openTab(event, 'Specification')">
                                <span class="icon is-large"><i class="fa fa-2x fa-file-code-o blue"></i></span>
                                <span>Specification</span>
                              </a>
                              </li>
                              <li id="tablinks">
                                 <a onclick="openTab(event, 'Reviews')">
                                <span class="icon is-large"><i class="fa fa-2x fa-cog blue"></i></span>
                                <span>Reviews</span>
                              </a>
                              </li>
                            </ul>
                          </div>
                    </div>
                </section>
                <div class="container section">
                    <div id="Overview" class="content-tab" >
                      <p>
                        test1<br />
                      Overview Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="Details" class="content-tab" style="display:none">
                        <p>
                          test2<br />
                        Details Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="Specification" class="content-tab" style="display:none">
                       <p>
                         test3 <br />  
                       Specification Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="Reviews" class="content-tab" style="display:none">
                       <p>
                         test3 <br />  
                       Specification Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </Layout>
        )
    }
}
