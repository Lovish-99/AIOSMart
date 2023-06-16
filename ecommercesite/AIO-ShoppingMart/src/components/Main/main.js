import React from 'react';
import './main1.css';
class Main extends React.Component {
    render() {
        return (
            <>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>

                    </ol>


                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="./img/main.jpg" alt="img" />
                            <div class="carousel-caption">

                            </div>
                        </div>

                        <div class="item">
                            <img src="./img/main2.jpg" alt="img" />
                            <div class="carousel-caption">

                            </div>
                        </div>

                        <div class="item">
                            <img src="./img/main4.jpg" alt="img" />
                            <div class="carousel-caption">

                            </div>
                        </div>
                        <div class="item">
                            <img src="./img/main5.jpg" alt="img" />
                            <div class="carousel-caption">

                            </div>
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <br />

                <div class="container text-center">
                    <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>BIGGEST DEALS ON TOP BRANDS</h1><br /><hr />
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="./img/home1.jpeg" class="img-responsive" style={{ width: '100%' }} alt="img" />
                            <p className='project-head'>50 % OFF</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="./img/home2.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" />
                            <p className='project-head'>80 % OFF</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="./img/cloth7_5i8SoMq.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" />
                            <p className='project-head'>60 % OFF</p>
                        </div>

                    </div>
                </div><br /><br /><hr />
                <div class="container">
                    <h1 style={{ fontWeight: 'bold', fontSize: '31px', textAlign: 'center' }}>LATEST SHOPPING PRODUCTS</h1><br />
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="panel panel-primary">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p1.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer  festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-danger">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p2.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer  festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-success">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p3.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div class="container">

                    <div class="row">
                        <div class="col-sm-4">
                            <div class="panel panel-primary">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p4.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-danger">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p5.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-success">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p6.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="panel panel-primary">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p7.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-danger">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p8.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-success">
                                <div class="panel-heading festive">FESTIVE SEASON DEAL</div>
                                <div class="panel-body"><img src="./img/p9.jpg" class="img-responsive" style={{ width: '100%' }} alt="img" /></div>
                                <div class="panel-footer festive">Buy and get 40 % discount</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="outer3">
                        <h1 class="outer3h">Explore Our | Latest Products</h1>
                        <hr />
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="./img/banner4.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YWY0G0170xo" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-sm-3">
                            <img src="./img/book1.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KQmSn9_00nI" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-sm-3">
                            <img src="./img/banner6.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iZdFXs8nrdU" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-sm-3">
                            <img src="./img/banner9.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/igqyf0E8QrE" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="./img/banner7.jpg" alt="img" class="outerimage" />
                             {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iQRzqaXuxQc" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div> 
                            </div> */}
                        </div>
                        <div class="col-sm-3">
                            <img src="./img/banner10.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3vuriXshLtU" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-sm-3">
                            <img src="./img/banner5.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LejxE17khtE" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-sm-3">
                            <img src="./img/banner8.jpg" alt="img" class="outerimage" />
                            {/* <div class="modelvedio">
                                <div class="embed-responsive">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GMXsTi4kU_g" allowfullscreen></iframe>
                                </div>
                                <div class="modelinner">
                                    <h1 class="mr4">Spread the word!</h1>
                                    <a type="button" class="btn"><i class="fab fa-facebook fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-google-plus fa-2x"></i></a>
                                    <a type="button" class="btn"><i class="fab fa-linkedin fa-2x"></i></a>
                                    <button type="button" class="headbtn2" data-dismiss="modal">Close</button>
                                </div>
                            </div> */}
                        </div>
                        </div>
                </div>
            </>
        );
    }
}
export default Main;