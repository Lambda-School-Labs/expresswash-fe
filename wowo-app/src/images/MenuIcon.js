import React, {PureComponent} from 'react';


class MenuIcon extends PureComponent {
  render() {
    const {width='100%', fill='#ffffff'} = this.props;

    return (
        <svg id="Capa_1" x="0px" y="0px" width={width} viewBox="0 0 384.97 384.97" style={{enableBackground:'new 0 0 384.97 384.97'}}>
            <g>
                <g id="Menu_1_">
                    <path fill={fill} d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                        c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                    <path fill={fill} d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                        S379.58,180.455,372.939,180.455z"/>
                    <path fill={fill} d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                        c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
                </g>
            </g>
        </svg>
    );
  }
}

export default MenuIcon;
