import React from "react";
import Layout from '../../components/Layout'

const Contact = () => {
    return (
        <Layout>
            <div className="container">
                <section class="section">
                    <div class="columns is-mobile is-centered">
                        <div class="column is-half">
                            <p class="bd-notification is-primary">
                                <code class="html">is-half</code><br />
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section columns">
<<<<<<< HEAD
                    <div className="column is-one-third animated fadeInLeftBig">
                        left
                    </div>
                    <div className="column is-one-third animated fadeInUp">
                        Canter
=======
                    <div className="column is-two-thirds">

>>>>>>> 15dd4bef4746650ad5cfe0e3f1e34ec968c4f855
                    </div>
                    <div className="column is-one-third animated fadeInRightBig">
                        <form netlify>
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input" /></div>
                            </div>

                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input
                                        class="input is-success"
                                        type="text"
                                        placeholder="Text input"
                                        value="bulma" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <i class="fas fa-check"></i>
                                    </span>
                                </div>
                                <p class="help is-success">This username is available</p>
                            </div>

                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input
                                        class="input is-danger"
                                        type="email"
                                        placeholder="Email input"
                                        value="hello@" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </span>
                                </div>
                                <p class="help is-danger">This email is invalid</p>
                            </div>

                            <div class="field">
                                <label class="label">Subject</label>
                                <div class="control">
                                    <div class="select">
                                        <select>
                                            <option>Select dropdown</option>
                                            <option>With options</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Message</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Textarea"></textarea>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <label class="checkbox">
                                        <input type="checkbox" />
                                        I agree to the{" "}
                                        <a href="#">terms and conditions</a>
                                    </label>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <label class="radio">
                                        <input type="radio" name="question" />
                                        Yes
                                </label>
                                    <label class="radio">
                                        <input type="radio" name="question" />
                                        No
                                </label>
                                </div>
                            </div>

                            <div class="field is-grouped">
                                <div class="control">
                                    <button type="submit" class="button is-link">Submit</button>
                                </div>
                                <div class="control">
                                    <button class="button is-text">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact
