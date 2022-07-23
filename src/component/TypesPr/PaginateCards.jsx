
import React from "react";
import CardPr from './ProduitCard'
import ReactPaginate from "react-paginate";
import 'mdbreact/dist/css/mdb.css';
import p1 from "../../ProdImg/Product/p1.png"

import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            perPage: 12,
            page: 0,
            pages: 0,
            container :{
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
        })
    }
  
   

    static getDerivedStateFromProps(props,state){
        let Nbrpage=Math.floor(props.items.length / state.perPage)
        if ((props.items.length  % 2 )==0){
            state.pages=Nbrpage;
        }else {
            state.pages=Nbrpage+1;

        }
        return null
       
    }

 
    //click of pagination
    handlePageClick = (event) => {
        let page = event.selected;
       
        this.setState({page})
        
    }
    render() {
    //    console.log( this.state)

        const {page, perPage, pages} = this.state;
        let items = this.props.items.slice(page * perPage, (page + 1) * perPage);
        return (
            <>
                
                    <motion.ul  variants={this.state.container} 
                                initial="hidden" 
                                animate="visible" 
                                className=" container d-flex align-content-around  justify-content-between flex-wrap" id="items_card">
        
                        {items.map((item) => { return (<CardPr product={item} img={p1} />) })}

                    </motion.ul>
                    <div className="d-flex justify-content-end mb-5">
                        {<ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pages}
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
                    </div>
            </>

        )
    }
}