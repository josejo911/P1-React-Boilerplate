import React, {Component} from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

class MeetTheTeamSlider extends Component {

    constructor(props){
        super(props);
        this.state = {
            meetTheTeam_loaded: false
        }
    }

    componentDidMount(){
        this.setState({meetTheTeam_loaded : true});
    }

    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            fade: false
          };

        return(
            <div className="meetTheTeam">

                <div className={classNames({'banner_scroller': true, 'loaded': this.state.meetTheTeam_loaded })}>

                    <Slider {...settings}>
                    
                        <div className="item">
                            <div className="profilePic">
                                <img src="https://cdn-images-1.medium.com/max/1600/1*KymdP0p2qgUuuqmfJDICrQ.gif" />
                            </div>
                        </div>

                    </Slider>
                </div>

            

            </div>
        )
    };
}

export default MeetTheTeamSlider;