import React from 'react';
import Footer from '../Footer';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {
    var component, footer, link, titulo, icono, div;

    //Renderizado componente
    beforeEach((() => component = shallow(<Footer />)))
    beforeEach((() => footer = component.find('footer')))
    beforeEach((() => link = component.find('Link')))
    beforeEach((() => titulo = component.find('h4')))
    beforeEach((() => icono = component.find('FontAwesomeIcon')))
    beforeEach((() => div = component.find('div')))

    //Que exista el componente
    it('Existe la página', () => {
        expect(component).toBeTruthy();
    })

    it('Existe la etiqueta footer', () => {
        expect(footer).toBeTruthy();
    })

    it('Existe la etiqueta Link', () => {
        expect(link).toBeTruthy();
    })

    it('Existe la etiqueta h4 de mapa de sitio', () => {
        expect(titulo).toBeTruthy();
    })

    it('Existe un icono', () => {
        expect(icono).toBeTruthy();
    })

    it('Hay una clase titulo-mapa', () => {
        expect(titulo.hasClass('titulo-mapa')).toBeTruthy()
    })

    it('Hay etiquetas div', () => {
        expect(div).toBeTruthy()
    })

    it('Deben de haber 20 etiquetas div', () => {
        const divs=div.length;
        expect(divs).toEqual(20)
    })
})