import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

function ElementWithTooltip(id, tip, body, placement) {
    console.log("elementwithtooltip called");
    console.log(`id: ${id}`);
    console.log(`tip: ${tip}`);
    console.log(`body: ${body}`);
    console.log(`placement: ${placement}`);

/*
    return (<>
        <OverlayTrigger 
          key={id}
          placement={placement}
          delay={{ show: 200, hide: 250}}
          overlay={<Tooltip id={`tooltip-${id}`}>{tip}</Tooltip>}
        >
            <>
            Test Only
            </>
        </OverlayTrigger>
    </>
    );
    */
   let toolStr = `<OverlayTrigger key=${id} 
    placement="bottom" overlay={<Tooltip id="tooltip-"${id}>${tip}</Tooltip>}> 
    <> ${body} </></OverlayTrigger>  `;
    return toolStr;
}

export default ElementWithTooltip;