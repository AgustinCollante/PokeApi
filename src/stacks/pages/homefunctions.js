export const UpperCase = (str) => {
    let upper = str.slice(0,1)
    return upper.toUpperCase() + str.slice(1)
}

export const Type = (type) => {
    switch (type) {
        case "fire":
            return "#E30D0D"
        
        case "grass":
            return "#378B1F"
        
        case "water":
            return "#4285B8"
        
        case "electric": 
            return "#F9FF3D"
        
        case "poison":
            return "#8900C2"
        
        case "ground":
            return "#CF5C05"
        
        case "fighting":
            return "#72ADB9"
    
        default:
            return "#9B9B9B"
    }
}