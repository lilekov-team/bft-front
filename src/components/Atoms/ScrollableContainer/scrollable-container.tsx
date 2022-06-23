import { ComponentProps } from "react";
import { Scrollbars } from "react-custom-scrollbars";




interface ScrollableContainerProps {
    children: React.ReactElement | React.ReactElement[],
    maxHeight?: number | string,
    minHeight?: number |string,
    width?: number | string ,
    margin?: number,
    trackColor?: string,
    thumbColor?: string
}

export const ScrollableContainer: React.FC<ScrollableContainerProps&ComponentProps<'div'>> = ({children, maxHeight, minHeight, width, margin, thumbColor, trackColor}) => {

    

    return (
        <Scrollbars
        autoHeight
        autoHeightMax={maxHeight??295}
        autoHeightMin={minHeight??0}
        
        hideTracksWhenNotNeeded
        renderTrackVertical={({style, ...props}) => <div {...props} style={{...style, backgroundColor: 'transparent', background: trackColor, borderRadius: '0.5625rem',  width: '0.1875rem', marginLeft: margin??'0px', position: 'absolute',right: '0px', bottom: '2px', top: '2px'}} className="track-vertical"/>}
        renderThumbVertical={({style, ...props}) => <div {...props} style={{...style,  background: thumbColor ?? "var(--primary)", opacity: 0.7, borderRadius: '0.5625rem',  width: '0.1875rem', margin: 0}} className="thumb-vertical"/>}
        style={{
            width: width??"100%"
        }}
        
        >
            {children}
        </Scrollbars>
    )
}