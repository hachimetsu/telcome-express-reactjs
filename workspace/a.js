let ToJson = (d) => {
    const arr = []
    let n = ["realmi", "poco", "gpixel", "oppo", "vivo", "xiaomi", "iphone", "infinix"];
    d.forEach((_,i) => {
        let obj = {};
        obj.name = n[i],
        obj.src = d[i];
        arr.push(obj);
    })
    console.log(arr)
    
}

const data = `https://rukminim1.flixcart.com/fk-p-flap/240/240/image/907c0aa66a4343e9.jpg?q=90
https://rukminim1.flixcart.com/fk-p-flap/240/240/image/1d3fa4dfd3d855f6.jpg?q=90
https://rukminim1.flixcart.com/fk-p-flap/240/240/image/3738381ad5b01e6a.jpg?q=90
https://rukminim1.flixcart.com/fk-p-flap/240/240/image/3ac5499f6d57842f.jpg?q=90
https://rukminim1.flixcart.com/fk-p-flap/240/240/image/78e19d9f245aa588.jpg?q=90
https://rukminim1.flixcart.com/flap/240/240/image/d3d04a6c6ca21475.jpg?q=90
https://rukminim1.flixcart.com/fk-p-flap/240/240/image/af53134b9945523e.jpg?q=90
https://rukminim1.flixcart.com/fk-p-flap/240/240/image/0f5ade4858e4f100.jpg?q=90`;

ToJson(data.split("\n"));


