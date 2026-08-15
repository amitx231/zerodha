import React from "react";
import {render,screen} from "@testing-library/react";

import Hero from '../landing_page/home/Hero';

//Test suit
describe("Hero Component",()=>{
    test('render hero image',()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Home page" );
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","images/homeHero.png");
    })
})