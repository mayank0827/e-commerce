import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>Ecommerce is one way people buy and sell things in
                    retail. Some companies sell products online only,
                    while other sellers use ecommerce as a part of a 
                    broader strategy that includes physical stores and 
                    other distribution channels.  Either way, ecommerce 
                    allows startups, small businesses, and large companies 
                    to sell products at scale andreach customers across the world.</p>
                    <p>
                    Ecommerce is one way people buy and sell things in
                    retail. Some companies sell products online only,
                    while other sellers use ecommerce 
                    </p>
            </div>
        </div>
    )
}

export default DescriptionBox;