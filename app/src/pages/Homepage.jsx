import * as React from 'react'
import SlideShow from '../components/slideshow/SlideShow'
import Accordion from '../components/accordion/Accordion'
import Tabs from '../components/tabs/Tabs'
const { $slideshow, $items }  = require("../DB.json");
export default function Homepage(){
    return <>
        <SlideShow setJSON={$slideshow}/>
        <Accordion setJSON={$items} />
        <Tabs />
    </>
}