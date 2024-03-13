import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const CarouselPost = ({ posts }) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
}