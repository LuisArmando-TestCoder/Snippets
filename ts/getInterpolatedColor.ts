type ColorQuartet = [number,number,number,number]

function getInterpolatedColor(
    frecuency: number,
    colorQuartetA: ColorQuartet,
    colorQuartetB: ColorQuartet
) {
    const normalizedTop = Math.min(1, frecuency / 128);
    
    const [red, green, blue, alpha] = colorQuartetA.map((value, index) => (
        normalizedTop * (
            Math.max(
                value, colorQuartetB[index]
            ) - Math.min(
                    value, colorQuartetB[index]
                )
            ) + Math.min(
                value, colorQuartetB[index]
            )
        )
    );

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
