import * as THREE from "three";
import { consulters } from "scene-preset";
import { Scene, Scenes, SceneExport } from "scene-preset/lib/types/consulters";

const rotationSpeed = .01

export default {
  randomRingAngel: {
    object: () => {
        const circleAmount = 120
        const initialSize = .02
        const height = 10
        const ringsAmount = 3
        const randomTreshold = .5 

        return consulters.getProceduralGroup([{
            dimensions: [ringsAmount],
            getIntersectionMesh([z]) {
                const size = initialSize * (z + 1)
                return consulters.getProceduralGroup([{
                    material: new THREE.MeshStandardMaterial({ color: "#000" }),
                    geometry: new THREE.BoxBufferGeometry(size, size, size),
                    dimensions: [circleAmount, height],
                    getIntersectionMesh([x, y], mesh) {
                        const xStep = x / circleAmount * Math.PI * 2
                        const distance = circleAmount / 12 * size * 2
        
                        mesh.rotation.y = xStep
                        mesh.position.set(
                            Math.sin(xStep) * distance,
                            y * size,
                            Math.cos(xStep) * distance 
                        )
        
                        mesh.visible = Math.random() < randomTreshold
        
                        return mesh
                    }
                }])
            }
        }])
    },
    onAnimation({ object3D }: SceneExport) {
        object3D.children.forEach((ring, index) => {
            ring.rotation.y += rotationSpeed
            ring.rotation.z = Math.sin(ring.rotation.y + index) / 2
        })
    }
  } as unknown as Scene
} as Scenes;
