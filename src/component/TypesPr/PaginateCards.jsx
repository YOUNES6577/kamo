
import React from "react";
import CardPr from './ProduitCard'
import ReactPaginate from "react-paginate";
import 'mdbreact/dist/css/mdb.css';
// import p1 from "../../ProdImg/Product/p1.png"

import { motion } from "framer-motion";

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            perPage: 12,
            page: 0,
            pages: 0,
            container: {
                hidden: { opacity: 1, scale: 0 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delayChildren: 0.1,
                        staggerChildren: 0.2
                    }
                }
            },
            counter: 0
        })
        this.ModalCounter = this.ModalCounter.bind(this)
        this.Paginate = this.Paginate.bind(this)
    }
    ModalCounter() {
        this.setState({ counter: this.state.counter + 1 })
        console.info('Created Modal is : ' + this.state.counter)
    }
    static getDerivedStateFromProps(props, state) {
        let Nbrpage = Math.floor(props.items.length / state.perPage)
        if ((props.items.length % 2) == 0) {
            state.pages = Nbrpage;
        } else
            state.pages = Nbrpage + 1;
        return null
    }
    //click of pagination
    handlePageClick = (event) => {
        let page = event.selected;
        this.setState({ page })
    }
    Paginate(props) {
        return <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={props.pages}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination pagination-circle"}
            disabledClassName={"page-item disabled"}
            activeClassName={"page-item  active"}
            activeLinkClassName={"page-link "}
            previousClassName={"page-item"}
            NextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
        />
    }
    render() {
        const { page, perPage, pages } = this.state;
        let items = this.props.items.slice(page * perPage, (page + 1) * perPage);
        return (
            <>
                <this.Paginate pages={pages} />
                <motion.ul variants={this.state.container}
                    initial="hidden"
                    animate="visible"
                    className=" container" id="items_card">
                    {items.map((item) => {
                        return (
                            <CardPr
                                ModalCounter={this.ModalCounter}
                                product={item}
                                img={'https://ik.imagekit.io/younes6577/kamoplast/tr:w-200,h:250/p1_U8ebY9sWP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658713205305'}
                                // img={p1}
                            />
                        )
                    })}
                </motion.ul>
                <this.Paginate pages={pages} />
            </>
        )
    }
}