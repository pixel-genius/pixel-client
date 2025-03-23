import { useState } from "react";
import { Button } from "@repo/ui/components/button"
import Typography from "@repo/ui/components/typography";
import { Input } from "@repo/ui/components/input";

const HighlightSection = ()=>{

    const [input, setInput] = useState<{id: number, value: string}[]>([])

    const handleAddHighLights = ()=>{   
        setInput((prev)=>[...prev, {id: prev.length+1, value: ""}])
    } 
    const handleChange = (id: number, value: string) => {
        setInput((prev) =>
          prev.map((input) => (input.id === id ? { ...input, value } : input))
        );
      }; 

    return(
        <>
         <Typography
          component="p"
          variant="label/lg"
          weight="medium"
        >
            Product Highlights
        </Typography>
        <Typography component="p" variant={"paragraph/sm"}>
        Enter key features and highlights of your product here (e.g., unique capabilities, special design)
        </Typography>
        {input.length >= 5 ?  <Typography component="p" variant={"paragraph/sm"} className="mt-2">
        maximum you can enter 5 items
        </Typography> : null}
       
        <Button className="mt-8" onClick={handleAddHighLights} disabled={input.length >= 5}>Create Product</Button>
        {input.map(({ id, value }) => (
          <Input
              value={value}
              key={id}
              onChange={(e) => handleChange(id, e.target.value)}
              placeholder="Please write your highlight"
              
            />
         
        ))}
        </>
    )
}

export default HighlightSection