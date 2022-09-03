import React, { useEffect } from 'react';
import PrdCard from './PrdCardList'
// import { SketchPicker } from 'react-color';

const items =[
    {
        "_id": "FL-B5L",
        "Type": "Lubrifiant",
        "Volume": 5,
        "Matier": "PEHD",
        "Poids": [
            1100,
            1200
        ],
        "Emballage": 8,
        "Colors": [
            "#fff",
            "#dbc925"
        ],
        "Opacity": true,
        "Empilable": true,
        "Dimension": {
            "height": 370,
            "length": 330,
            "width": 270
        },
        "sticker": {
            "height": 180,
            "length": 190
        },
        "Images": [
            "p2.webp",
            "p3.webp"
        ],
        "Cover": {
            "Matier": "PEHD",
            "Capsule": true,
            "Degaseurs": true,
            "Joint": true,
            "Inovliable": 50,
            "Dimension": 50,
            "Colors": [
                "#098f2c",
                "#8f0916"
            ],
            "Images": [
                "Bouchon-38-Vert.webp",
                "Bouchon-38-Vert(1).webp",
                "Bouchon-38-Vert(2).webp",
                "Bouchon-60-Rouge.webp"
            ]
        },
        "Price": {
            "$numberDecimal": "190.00"
        }
    },
    {
        "_id": "FL-J25L",
        "Type": "Chimique",
        "Volume": 25,
        "Matier": "PEHD",
        "Poids": [
            1100,
            1200
        ],
        "Emballage": 8,
        "Colors": [
            "#098f2c",
            "#706c6c",
            "#ed1f33",
            "#f0eee1"
        ],
        "Opacity": true,
        "Empilable": true,
        "Dimension": {
            "height": 370,
            "length": 330,
            "width": 270
        },
        "sticker": {
            "height": 180,
            "length": 190
        },
        "Images": [
            "Jerrican_25L.webp",
            "p4.webp",
            "p5.webp",
            "p5.webp"
        ],
        "Cover": {
            "Matier": "EPHD",
            "Capsule": true,
            "Degaseurs": true,
            "Joint": true,
            "Inovliable": 60,
            "Dimension": 60,
            "Colors": [
                "#098f2c",
                "#8f0916"
            ],
            "Images": [
                "Bouchon-38-Vert.webp",
                "Bouchon-38-Vert(1).webp",
                "Bouchon-38-Vert(2).webp"
            ]
        },
        "Price": {
            "$numberDecimal": "350.00"
        }
    },
    {
        "_id": "FL-B5L-1",
        "Type": "Lubrifiant",
        "Volume": 5,
        "Matier": "PEHD",
        "Poids": [
            1100,
            1200
        ],
        "Emballage": 8,
        "Colors": [
            "#fff",
            "#dbc925"
        ],
        "Opacity": true,
        "Empilable": true,
        "Dimension": {
            "height": 370,
            "length": 330,
            "width": 270
        },
        "sticker": {
            "height": 180,
            "length": 190
        },
        "Images": [
            "p3.webp",
            "p2.webp"
        ],
        "Cover": {
            "Matier": "PEHD",
            "Capsule": true,
            "Degaseurs": true,
            "Joint": true,
            "Inovliable": 50,
            "Dimension": 50,
            "Colors": [
                "#098f2c",
                "#8f0916"
            ],
            "Images": [
                "Bouchon-38-Vert.webp",
                "Bouchon-38-Vert(1).webp",
                "Bouchon-38-Vert(2).webp",
                "Bouchon-60-Rouge.webp"
            ]
        },
        "Price": {
            "$numberDecimal": "190.00"
        }
    },
    {
        "_id": "FL-J25L-1",
        "Type": "Chimique",
        "Volume": 25,
        "Matier": "PEHD",
        "Poids": [
            1100,
            1200
        ],
        "Emballage": 8,
        "Colors": [
            "#098f2c",
            "#706c6c",
            "#ed1f33",
            "#f0eee1"
        ],
        "Opacity": true,
        "Empilable": true,
        "Dimension": {
            "height": 370,
            "length": 330,
            "width": 270
        },
        "sticker": {
            "height": 180,
            "length": 190
        },
        "Images": [
            "p5.webp",
            "Jerrican_25L.webp",
            "p4.webp",
            "p6.webp"
        ],
        "Cover": {
            "Matier": "EPHD",
            "Capsule": true,
            "Degaseurs": true,
            "Joint": true,
            "Inovliable": 60,
            "Dimension": 60,
            "Colors": [
                "#098f2c",
                "#8f0916"
            ],
            "Images": [
                "Bouchon-38-Vert.webp",
                "Bouchon-38-Vert(1).webp",
                "Bouchon-38-Vert(2).webp"
            ]
        },
        "Price": {
            "$numberDecimal": "350.00"
        }
    },
    {
        "_id": "FL-J25L-2",
        "Type": "Chimique",
        "Volume": 25,
        "Matier": "PEHD",
        "Poids": [
            1100,
            1200
        ],
        "Emballage": 8,
        "Colors": [
            "#098f2c",
            "#706c6c",
            "#ed1f33",
            "#f0eee1"
        ],
        "Opacity": true,
        "Empilable": true,
        "Dimension": {
            "height": 370,
            "length": 330,
            "width": 270
        },
        "sticker": {
            "height": 180,
            "length": 190
        },
        "Images": [
            "p6.webp",
            "Jerrican_25L.webp",
            "p4.webp",
            "p5.webp"
        ],
        "Cover": {
            "Matier": "EPHD",
            "Capsule": true,
            "Degaseurs": true,
            "Joint": true,
            "Inovliable": 60,
            "Dimension": 60,
            "Colors": [
                "#098f2c",
                "#8f0916"
            ],
            "Images": [
                "Bouchon-38-Vert.webp",
                "Bouchon-38-Vert(1).webp",
                "Bouchon-38-Vert(2).webp"
            ]
        },
        "Price": {
            "$numberDecimal": "350.00"
        }
    }
]

const Test = () => {
    useEffect(() => {
        // window.onresize = () => { console.log(window.innerWidth) }
    }
        , []);

    return (
        <div
            style={{
                width: '100%',
                height: "100vh",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <div className="w-75" ><PrdCard  product={items} theme={{color: '#1976d2'}}/></div>
            <div className="w-50" ><PrdCard  product={items} theme={{color: '#1976d2'}}/></div>
            {/* <div className="w-75" ><SketchPicker /></div> */}
        </div>
    )
}


export default React.memo(Test) 