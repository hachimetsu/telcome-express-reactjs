import * as React from 'react'
const _Footer = (props) => {
    const $footer = props.setJSON;
    const setFooter = ({brand, social, detail_para, products, links, contacts, site}) => {
        return <>
            <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block"><span>Get connected with us on social networks:</span></div>
                <div>{social.map((icon) => {return <a href={icon.href} className="me-4 text-reset"><i className={icon.class}></i></a>})}</div>
            </section>
            <section className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"><h6 className="text-uppercase fw-bold mb-4"><i className="fas fa-gem me-3"></i>{brand}</h6><p>{detail_para}</p></div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"><h6 className="text-uppercase fw-bold mb-4">Products</h6>{products.map((product) => { return <p><a href={product.href} className="text-reset">{product.name}</a></p> })}</div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"><h6 className="text-uppercase fw-bold mb-4">Useful links</h6>{links.map((link) => { return <p><a href={link.href} className="text-reset">{link.name}</a></p> })}</div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"><h6 className="text-uppercase fw-bold mb-4">Contact</h6>{contacts.map((contact) => { return contact.href === "" ? <p><i className={contact.class}></i>{contact.detail}</p> : <a href={contact.href} className="me-4 text-reset"><i className={contact.class}></i>{contact.detail}</a>})}</div>
                </div>
            </section>
            <div className="text-center p-4">© 2021 Copyright:<a className="text-reset fw-bold" href="/">{site}</a></div>
        </footer>
        </>
    }
    return <>
        {setFooter($footer)}
    </>
}
export default _Footer;