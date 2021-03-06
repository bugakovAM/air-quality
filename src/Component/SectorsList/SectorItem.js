import React, {useState} from 'react';

const SectorItem = ({sector, number}) => {

    const [isToolTipShowing, setTooltipShowing]= useState(false);
    const [isDirectionSwitched, setDirectionSwitched]= useState(false)

    const toggleToolTip= (newValue)=> {
        setDirectionSwitched(number % 3 === 0);

        setTooltipShowing(newValue);

    }

    //const toggleToolTip = () => {
    //    setTooltipShowing(
    //        !isToolTipShowing
    //    )
    //}

    return (
        <div  className="sectors-list-items"
                onMouseEnter={()=> toggleToolTip(true)}
                onMouseLeave={()=> toggleToolTip(false)}
                style={{

                background:`url(${sector.imgUrl}) center no-repeat` ,
                backgroundSize: `cover`
        }}>

            <p className="sectors-list-items-name">
                {sector.name}

            </p>
            {
                isToolTipShowing && <p className={`sectors-list-items-tooltip ${
                    isDirectionSwitched ? "sectors-list-items-tooltip-switched" : ""
                }`}>
                    {sector.desc}
                </p>
            }
        </div>
    );
};

export default SectorItem;