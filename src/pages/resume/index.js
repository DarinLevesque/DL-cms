import React from "react";
import Layout from '../../components/Layout'

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}

export default class ResumePage extends React.Component {
  componentDidMount() {
    const tabs = document.querySelectorAll(".tab")

    tabs.forEach(tab => {
      tab.addEventListener("click", event => {
        document.getElementsByClassName("is-active")[0]
                .classList.remove("is-active");

        tab.classList.add("is-active")
      })
    })
  }
  render() {
        return (
            <Layout>
                <section className="section columns">
                    <div className="column">
                        <div class="tabs">
                          <ul>
                            <li class="tab is-active" onclick="openTab(event,'Overview')"><a>Pictures</a></li>
                            <li class="tab" onclick="openTab(event,'Details')"><a>Music</a></li>
                            <li class="tab" onclick="openTab(event,'Specification')"><a>Videos</a></li>
                            <li class="tab" onclick="openTab(event,'Reviews')"><a>Documents</a></li>
                          </ul>
                        </div>
                    </div>
                </section>
                <div className="container section">
                    <div id="Overview" className="tabcontent" >
                      <p>
                      Overview Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="Details" class="tabcontent" style={{display: 'none'}}>
                        <p>
                          test2<br />
                        Details Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="Specification" className="tabcontent" style={{display: 'none'}}>
                       <p>  
                       Specification Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div id="Reviews" className="tabcontent" style={{display: 'none'}}>
                       <p> 
                       Specification Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </Layout>
        )
    }
}
