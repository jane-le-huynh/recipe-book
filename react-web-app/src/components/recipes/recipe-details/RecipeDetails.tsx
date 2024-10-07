import { useState, useEffect, FormEvent } from "react";
import spoonacularService from "../../../services/spoonacular-service";
import { Recipe } from "../../../models/recipe";
import { useParams } from "react-router-dom";

export default function RecipeDetails()
{
    const [recipeData, setRecipeData] = useState<Recipe>();

    const params = useParams();

    const id = params.id ?? 0;

    useEffect(() => {

        getRecipe();

    }, [])

    async function getRecipe()
    {
        const selectedRecipe = await spoonacularService.getRecipeById(+id);
        setRecipeData(selectedRecipe);
    }
    
    return (
        <>
        <h3>{recipeData?.title}</h3>
        <h5>Instructions</h5>
        <p>{recipeData?.instructions}</p>
        <img src={recipeData?.image} />
        </>
    )
}  