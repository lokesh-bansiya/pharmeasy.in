import "./Home_Styles/ShopByConcernComponents.css";

const ShopByConcernComponents = () => {
    return (
        <div className="ShopByConcern-Container">
            <h1 className="h1-tag-size">Shop by Concern</h1>
            <p>Products are handpicked by experts</p>
            <div className="ShopByConcern-Box">
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=256x0" alt="" />
                    <p>Skin Care</p>
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=256x0" alt="" />
                    <p>Vitamins & Supplements</p>
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=256x0" alt="" />
                    <p>Diabetes Care & Sugar</p>
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=256x0" alt="" />
                    <p>Cardiac Care</p>
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=256x0" alt="" />
                    <p>Baby & Mom care</p>
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=256x0" alt="" />
                    <p>Covid Care</p>
                </div>
                <div>
                    <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=256x0" alt="" />
                    <p>Lifestyle Disorders</p>
                </div>
            </div>
        </div>
    );
}

export {ShopByConcernComponents};