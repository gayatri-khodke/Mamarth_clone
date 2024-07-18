const products = [
    {
         Product_Name  :'Tea Tree Facewash for acne & pimples',
        Product_Link  :'https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&width=400&height=400',
       Rating : 4.8,
       Reviews  :'For baby skin that constantly flaked and dry this is a lifesaver. Love it.',
       MRP  :'Rs.249.00',
       Pack_Size  :'100ml',
       Discount  :'NA',
       Key_Ingredients : ['Neem','Aloe Vera','Tea Tree Oil'],
       Category : ['Face Wash'],
       Tokens : ['tea','tree','facewash','acne','pimple'],
    NewLaunch:"No"},
    {
        Product_Name  :'Anti Hair Fall Kit for complete hair care',
        Product_Link  :'https://images.mamaearth.in/catalog/product/1/_/1_white_bg_31.jpg?format=auto&width=400&height=400',
       Rating : 4.8,
       Reviews  :'With changing weather I tend to get itchy and dry scalp with leads to dandruff. Mamaearth happy heads shampoo is great for controlling it.',
       MRP  :'Rs.1199.00',
       Pack_Size  :'NA',
       Discount  :'(25% off)',
       Key_Ingredients : ['Bhringraj Oil','Biotin','All hair type  The kit is suitable for all hair type'],
       Category : ['Hair Kit'],
       Tokens : ['anti','hair','fall','kit','complete','hair','care'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Argan Hair Mask with Argan Avocado Oil and Milk Protein for Frizzfree & Stronger Hair â€“',
        Product_Link  :'https://images.mamaearth.in/catalog/product/_/o/_onion-oil-250ml__1_1_1.jpeg?format=auto&width=400&height=400',
       Rating : 4.8,
       Reviews  :'It is the best charcoal face mask i have ever used. The best product by far for acne and dry skin. It really helped my skinnto glow naturally',
       MRP  :'Rs.599.00',
       Pack_Size  :'200ml',
       Discount  :'NA',
       Key_Ingredients : ['Argan Oil'],
       Category : ['Hair Oil'],
       Tokens : ['argan','hair','mask','argan','avocado','oil','milk','protein','frizz','free','strong','hair'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Ubtan Bamboo Sheet Mask with Turmeric & Saffron for Skin Brightening',
        Product_Link  :'https://images.mamaearth.in/catalog/product/u/b/ubtan_bamboo_sheet_mask_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Very good product with good customer service',
       MRP  :'Rs.149.00',
       Pack_Size  :'25 g',
       Discount  :'NA',
       Key_Ingredients : ['Turmeric'],
       Category : ['NA'],
       Tokens : ['ubtan','bamboo','sheet','mask','turmeric','saffron','skin','brightening'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Niacinamide Bamboo Sheet Mask with Niacinamide & Ginger Extract for Clear & Glowing Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vitamin_c_bamboo_sheet_mask_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Firstly I would like to say that I like all the Coco products ...I do my waxing also chocolate waxing..I often get dead skin on my face and black heads...I try using this Coco scrub and it is amazing it cleans my face very well ...it is not Harsh on my face skin cleans v well and gives good effect',
       MRP  :'Rs.149.00',
       Pack_Size  :'25 g',
       Discount  :'NA',
       Key_Ingredients : ['Niacinamide'],
       Category : ['NA'],
       Tokens : ['niacinamide','bamboo','sheet','mask','niacinamide','ginger','extract','clear','glowing','skin'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Shampoo and Onion Hair Serum Combo',
        Product_Link  :'https://mamaearth.in/product/onionshampooonionhairserum',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.634.00',
       Pack_Size  :'NA',
       Discount  :'(2% off)',
       Key_Ingredients : ['Red Onion'],
       Category : ['Hair Shampoo'],
       Tokens : ['onion','shampoo','onion','hair','serum','combo'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Shampoo and Oil Combo',
        Product_Link  :'https://images.mamaearth.in/catalog/product/1/_/1_white_bg_35.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.924.00',
       Pack_Size  :'NA',
       Discount  :'(3% off)',
       Key_Ingredients : ['Onion Seed Oil'],
       Category : ['NA'],
       Tokens : ['onion','shampoo','oil','combo'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Shampoo for Hair Growth & Hair Fall Control (250 ml)  Pac',
        Product_Link  :'https://images.mamaearth.in/catalog/product/o/n/onion-shampoo-600ml_1_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Just love this. awesome product .awesome smell light quick absorb one of my favorite. will be purchase again and again..',
       MRP  :'Rs.679.00',
       Pack_Size  :'Pack Of 2',
       Discount  :'(3% off)',
       Key_Ingredients : ['Onion Seed Oil'],
       Category : ['Hair Shampoo'],
       Tokens : ['onion','shampoo','hair','growth','hair','fall','control','250','ml','pac'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Spotless Skin Combo: Ubtan Facewash  100ml and Bye Bye Blemishes Face Cream',
        Product_Link  :'https://images.mamaearth.in/catalog/product/s/p/spotless_skin_combo_ubtan_facewash_100ml_bye_bye_blemishes_face_cream_30_ml_white_bg.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.679.00',
       Pack_Size  :'30ml',
       Discount  :'(3% off)',
       Key_Ingredients : ['Walnut Beads','Liquorice Extract','Carrot Seed Oil','Mulberry Extract','Daisy Flower','Geranium Oil','All Skin Types They are suitable for all skin types.'],
       Category : ['Face Wash'],
       Tokens : ['spotless','skin','combo','ubtan','facewash','100ml','bye','bye','blemishes','face','cream'],
    NewLaunch:"No"},
    {
        Product_Name  :'AntiAcne Kit',
        Product_Link  :'https://images.mamaearth.in/catalog/product/c/o/combo5_white_bg_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'this product is amazing  it reduced my hair fall and now my hair are improving a lot . i recommend all of you to use this amazing product .',
       MRP  :'Rs.849.00',
       Pack_Size  :'NA',
       Discount  :'(26% off)',
       Key_Ingredients : ['Apple Cider Vinegar','Niacinamide'],
       Category : ['NA'],
       Tokens : ['anti','acne','kit'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Scalp Serum with Onion & Niacinamide for Healthy Hair Growth',
        Product_Link  :'https://images.mamaearth.in/catalog/product/o/n/onion-hair-serum1200x1200_ad8hgvjdve7vcczs.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Great product skin is supple soft and shining I would any day recommend this product to friends and family members',
       MRP  :'Rs.599.00',
       Pack_Size  :'50ml',
       Discount  :'NA',
       Key_Ingredients : ['Red Onion'],
       Category : ['NA'],
       Tokens : ['onion','scalp','serum','onion','niacinamide','healthy','hair','growth'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Body Lotion with Vitamin C & Honey for Radiant Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/1/-/1-with-ingredient_3.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'It was good',
       MRP  :'Rs.399.00',
       Pack_Size  :'400 ml',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['Body Lotion'],
       Tokens : ['vitamin','c','body','lotion','vitamin','c','honey','radiant','skin'],
    NewLaunch:"No"},
    {
        Product_Name  :'Ubtan Body Lotion with Turmeric & Kokum Butter for Glowing Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/1/-/1-with-ingredient_2.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'The perfect combo u could gift u. I have been using this for almost one month now and the darkness around my mouth is reduce and I can see visible difference under my eyes no more bags when I smile now',
       MRP  :'Rs.399.00',
       Pack_Size  :'400 ml',
       Discount  :'NA',
       Key_Ingredients : ['Turmeric'],
       Category : ['Body Lotion'],
       Tokens : ['ubtan','body','lotion','turmeric','kokum','butter','glowing','skin'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Foaming Face Wash with Vitamin C & Turmeric for Skin Illumination â€“',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vitamin_c_foaming_face_wash_1.jpeg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Nice product',
       MRP  :'Rs.399.00',
       Pack_Size  :'150ml',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['Face Wash'],
       Tokens : ['vitamin','c','foaming','face','wash','vitamin','c','turmeric','skin','illumination'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination â€“',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vitamin_c_foaming_face_wash_1.jpeg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.249.00',
       Pack_Size  :'100ml',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['Face Wash'],
       Tokens : ['vitamin','c','face','wash','vitamin','c','turmeric','skin','illumination'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Face Cream with Vitamin C & SPF 20 for Skin Illumination',
        Product_Link  :'https://images.mamaearth.in/catalog/product/s/k/skin-illuminate-face-cream.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.599.00',
       Pack_Size  :'50g',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['NA'],
       Tokens : ['vitamin','c','face','cream','vitamin','c','spf','20','skin','illumination'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Face Mask With Vitamin C & Kaolin Clay for Skin Illumination',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vit_c_face_mask.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.499.00',
       Pack_Size  :'100 g',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['Face Mask'],
       Tokens : ['vitamin','c','face','mask','vitamin','c','kaolin','clay','skin','illumination'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Sleeping Mask with Aloe Vera for Skin Illumination',
        Product_Link  :'https://images.mamaearth.in/catalog/product/w/i/with-ingredient_2.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.599.00',
       Pack_Size  :'100 g',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['NA'],
       Tokens : ['vitamin','c','sleep','mask','aloe','vera','skin','illumination'],
    NewLaunch:"No"},
    {
        Product_Name  :'Onion Hair Mask For Hair Fall Control With Onion Oil and Organic Bamboo Vinegar',
        Product_Link  :'https://images.mamaearth.in/catalog/product/o/n/onion_hair_mask_1.jpg?format=auto&width=400&height=400',
       Rating : 4.8,
       Reviews  :'The skin plump serum for glowing skin is a boon for my skin. Makes my skin feel smooth and over time I have started noticing that my skinâ€™s texture has become so good.',
       MRP  :'Rs.599.00',
       Pack_Size  :'200ml',
       Discount  :'NA',
       Key_Ingredients : [],
       Category : ['Hair Oil'],
       Tokens : ['onion','hair','mask','hair','fall','control','onion','oil','organic','bamboo','vinegar'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Hairfall Control Kit',
        Product_Link  :'https://images.mamaearth.in/catalog/product/f/o/fop_white_bg_22.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.999.00',
       Pack_Size  :'NA',
       Discount  :'(28% off)',
       Key_Ingredients : ['à®†à®©à®¿à®¯à®©à¯ à®šà¯€à®Ÿà¯ à®†à®¯à®¿à®²à¯','à®†à®©à®¿à®¯à®©à¯ à®šà¯€à®Ÿà¯ à®†à®¯à®¿à®²à¯','à®†à®©à®¿à®¯à®©à¯ à®šà¯€à®Ÿà¯ à®†à®¯à®¿à®²à¯'],
       Category : ['Hair Kit'],
       Tokens : ['hairfall','control','kit'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Argan Conditioner with Argan & Apple Cider Vinegar for FrizzFree and Stronger Hair',
        Product_Link  :'https://images.mamaearth.in/catalog/product/a/r/argan_conditioner_1.jpg?format=auto&width=400&height=400',
       Rating : 4.9,
       Reviews  :'It really worked after first use only. Thanks!! mamaearth',
       MRP  :'Rs.349.00',
       Pack_Size  :'250ml',
       Discount  :'NA',
       Key_Ingredients : ['Argan Oil'],
       Category : ['NA'],
       Tokens : ['argan','conditioner','argan','apple','cider','vinegar','frizz','free','strong','hair'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Hair Serum and Onion Hair Oil Combo',
        Product_Link  :'https://images.mamaearth.in/catalog/product/1/_/1_white_bg_31.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.679.00',
       Pack_Size  :'NA',
       Discount  :'(3% off)',
       Key_Ingredients : ['Onion Seed Extract','Onion Seed Oil'],
       Category : ['Hair Oil'],
       Tokens : ['onion','hair','serum','onion','hair','oil','combo'],
    NewLaunch:"No"},
    {
        Product_Name  :'Onion Hair Oil for Hair Regrowth & Hair Fall Control',
        Product_Link  :'https://images.mamaearth.in/catalog/product/o/n/onion_hair_oil_200ml_fop_1200x1200.png?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.599.00',
       Pack_Size  :'250ml',
       Discount  :'NA',
       Key_Ingredients : ['Onion Seed Oil'],
       Category : ['Hair Oil'],
       Tokens : ['onion','hair','oil','hair','regrowth','hair','fall','control'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Ubtan Face Scrub with Turmeric & Walnut for Tan Removal',
        Product_Link  :'https://images.mamaearth.in/catalog/product/u/b/ubtan_face_scrub_1.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.349.00',
       Pack_Size  :'100g',
       Discount  :'NA',
       Key_Ingredients : ['Turmeric'],
       Category : ['NA'],
       Tokens : ['ubtan','face','scrub','turmeric','walnut','tan','removal'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Face Toner with Vitamin C & Cucumber for Pore Tightening',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vitamin_c_face_toner_1.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.399.00',
       Pack_Size  :'200 ml',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['NA'],
       Tokens : ['vitamin','c','face','toner','vitamin','c','cucumber','pore','tightening'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Aloe Vera Gel with Pure Aloe Vera & Vitamin E for Skin and Hair',
        Product_Link  :'https://images.mamaearth.in/catalog/product/a/l/aloe-vera-gel---pack-of-2_white_bg.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.399.00',
       Pack_Size  :'300ml',
       Discount  :'NA',
       Key_Ingredients : ['Aloe Vera','For Skin','For Hair'],
       Category : ['Body Kit'],
       Tokens : ['aloe','vera','gel','pure','aloe','vera','vitamin','e','skin','hair'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Hair Serum with Onion & Biotin for Strong FrizzFree Hair',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vitamin-c-sleeping-mask-1.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.299.00',
       Pack_Size  :'100 ml',
       Discount  :'NA',
       Key_Ingredients : ['Onion Seed Extract'],
       Category : ['NA'],
       Tokens : ['onion','hair','serum','onion','biotin','strong','frizz','free','hair'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Skin Correct Face Serum with Niacinamide and Ginger Extract for Acne Marks & Scars â€“',
        Product_Link  :'https://images.mamaearth.in/catalog/product/s/k/skin-correct-face-serum-with-ingredient_1.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.599.00',
       Pack_Size  :'30 ml',
       Discount  :'NA',
       Key_Ingredients : ['Niacinamide'],
       Category : ['Face Cream'],
       Tokens : ['skin','correct','face','serum','niacinamide','ginger','extract','acne','marks','scars'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Skin Illuminate Face Serum for Radiant Skin with Vitamin C & Turmeric â€“',
        Product_Link  :'https://images.mamaearth.in/catalog/product/s/k/skin-illuminate-face-serum--with-ingredients.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.599.00',
       Pack_Size  :'30 gm',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['Face Cream'],
       Tokens : ['skin','illuminate','face','serum','radiant','skin','vitamin','c','turmeric'],
    NewLaunch:"No"},
    {
        Product_Name  :'Bye Bye Dark Circles Eye Cream with Cucumber & Peptides for Dark Circles',
        Product_Link  :'https://images.mamaearth.in/catalog/product/b/y/bye_bye_blemishes_2_2.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.399.00',
       Pack_Size  :'20ml',
       Discount  :'NA',
       Key_Ingredients : ['Cucumber Extract','Daisy Flower Extract','Peptides','Hawkweed Extract'],
       Category : ['NA'],
       Tokens : ['bye','bye','dark','circles','eye','cream','cucumber','peptides','dark','circles'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Shampoo for Hair Growth and Hair Fall Control with Onion Oil and Plant Keratin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/w/i/with-ingredients_2.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'I have seen a change in my skin..it"s glowing and clean..use it twice or thrice a day whenever I get time to wash my face. Started using it on my hair too..will definitely post how its working',
       MRP  :'Rs.559.00',
       Pack_Size  :'400ml',
       Discount  :'NA',
       Key_Ingredients : ['Onion Seed Oil'],
       Category : ['Hair Oil','Hair Shampoo'],
       Tokens : ['onion','shampoo','hair','growth','hair','fall','control','onion','oil','plant','keratin'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Onion Conditioner for Hair Growth and Hair Fall Control with Onion and Coconut',
        Product_Link  :'https://images.mamaearth.in/catalog/product/w/i/with-ingredient_1.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.559.00',
       Pack_Size  :'400ml',
       Discount  :'NA',
       Key_Ingredients : ['Onion Seed Oil','Coconut','Men & women of all ages.'],
       Category : ['NA'],
       Tokens : ['onion','conditioner','hair','growth','hair','fall','control','onion','coconut'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Tea Tree Shampoo for Dandruff Free Hair',
        Product_Link  :'https://images.mamaearth.in/catalog/product/t/e/tea_tree_shampoo_1.jpg?format=auto&width=400&height=400',
       Rating : 4.5,
       Reviews  :'Very gentle fragrance. good product for little ones',
       MRP  :'Rs.349.00',
       Pack_Size  :'250ml',
       Discount  :'NA',
       Key_Ingredients : ['Tea Tree Oil','Ginger Oil'],
       Category : ['Hair Shampoo'],
       Tokens : ['tea','tree','shampoo','dandruff','free','hair'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Niacinamide Bamboo Sheet Mask with Niacinamide & Ginger Extract for Clear & Glowing Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/r/i/rice_water_bamboo_sheet_mask_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Firstly I would like to say that I like all the Coco products ...I do my waxing also chocolate waxing..I often get dead skin on my face and black heads...I try using this Coco scrub and it is amazing it cleans my face very well ...it is not Harsh on my face skin cleans v well and gives good effect',
       MRP  :'Rs.149.00',
       Pack_Size  :'25 g',
       Discount  :'NA',
       Key_Ingredients : ['Niacinamide'],
       Category : ['NA'],
       Tokens : ['niacinamide','bamboo','sheet','mask','niacinamide','ginger','extract','clear','glowing','skin'],
    NewLaunch:"No"},
    {
        Product_Name  :'OilFree Face Moisturizer for AcneProne Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/o/i/oil-free_face_moisturizer_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'I m writing this review after few useges and I m absolutely in love with it ..it made my my hair look so volumeness and long which is not often in normal circumstances.frizzyness will be further reduced after few usages.so you need to be patient in that.it is a very safe products for you hair and scalp and you must own it..',
       MRP  :'Rs.299.00',
       Pack_Size  :'80ml',      
       Discount  :'NA',
       Key_Ingredients : ['Apple Cider Vinegar','Cetearyl Octanoate','Betaine','Fatty Acids'],
       Category : ['NA'],
       Tokens : ['oil','free','face','moisturizer','acne','prone','skin'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Ubtan Face Mask with Saffron & Turmeric for Skin Brightening and Tan Removal',
        Product_Link  :'https://images.mamaearth.in/catalog/product/u/b/ubtan_face_mask_1.jpg?format=auto&width=400&height=400',
       Rating  :'NA',
       Reviews  :'NA',
       MRP  :'Rs.499.00',
       Pack_Size  :'100g',
       Discount  :'NA',
       Key_Ingredients : ['Saffron'],
       Category : ['Face Mask'],
       Tokens : ['ubtan','face','mask','saffron','turmeric','skin','brightening','tan','removal'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Vitamin C Body Lotion with Vitamin C & Honey for Radiant Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/v/i/vit-c-sunscreen-body-lotion-1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'It was good',
       MRP  :'Rs.399.00',
       Pack_Size  :'400 ml',
       Discount  :'NA',
       Key_Ingredients : ['Vitamin C'],
       Category : ['Body Lotion'],
       Tokens : ['vitamin','c','body','lotion','vitamin','c','honey','radiant','skin'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Ultra Light Indian Sunscreen with Carrot Seed Turmeric & SPF 50 PA+++',
        Product_Link  :'https://images.mamaearth.in/catalog/product/2/_/2_64.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'I love this roll on and Its a mist have for all moms. This helps in easy breathings especially when kids get troubled while they sleep. Its safe so I recommend to all. Easy to use and a wonderful product.',
       MRP  :'Rs.499.00',
       Pack_Size  :'80ml',
       Discount  :'NA',
       Key_Ingredients : ['Carrot Seed Oil'],
       Category : ['NA'],
       Tokens : ['ultra','light','indian','sunscreen','carrot','seed','turmeric','spf','50','pa+++'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Tea Tree Facewash for acne & pimples',
        Product_Link  :'https://images.mamaearth.in/catalog/product/1/2/12_2_ibepq3bigf22tx6z_white_bg.jpg?format=auto&width=400&height=400',
       Rating : 4.8,
       Reviews  :'For baby skin that constantly flaked and dry this is a lifesaver. Love it.',
       MRP  :'Rs.249.00',
       Pack_Size  :'100ml',
       Discount  :'NA',
       Key_Ingredients : ['Neem','Aloe Vera','Tea Tree Oil'],
       Category : ['Face Wash'],
       Tokens : ['tea','tree','facewash','acne','pimple'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Ubtan Bamboo Sheet Mask with Turmeric & Saffron for Skin Brightening',
        Product_Link  :'https://images.mamaearth.in/catalog/product/u/b/ubtan_bamboo_sheet_mask_1.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'Very good product with good customer service',
       MRP  :'Rs.149.00',
       Pack_Size  :'25 g',
       Discount  :'NA',
       Key_Ingredients : ['Turmeric'],
       Category : ['NA'],
       Tokens : ['ubtan','bamboo','sheet','mask','turmeric','saffron','skin','brightening'],
    NewLaunch:"Yes"},
    {
        Product_Name  :'Ubtan Body Lotion with Turmeric & Kokum Butter for Glowing Skin',
        Product_Link  :'https://images.mamaearth.in/catalog/product/w/i/with-ingredient_3.jpg?format=auto&width=400&height=400',
       Rating : 5,
       Reviews  :'The perfect combo u could gift u. I have been using this for almost one month now and the darkness around my mouth is reduce and I can see visible difference under my eyes no more bags when I smile now',
       MRP  :'Rs.399.00',
       Pack_Size  :'400 ml',
       Discount  :'NA',
       Key_Ingredients : ['Turmeric'],
       Category : ['Body Lotion'],
       Tokens : ['ubtan','body','lotion','turmeric','kokum','butter','glowing','skin'],
    NewLaunch:"No"},
    {
      Product_Name  :'Ubtan Body Lotion with Turmeric & Kokum Butter for Glowing Skin',
      Product_Link  :'https://images.mamaearth.in/catalog/product/w/i/with-ingredient_3.jpg?format=auto&width=400&height=400',
     Rating : 5,
     Reviews  :'The perfect combo u could gift u. I have been using this for almost one month now and the darkness around my mouth is reduce and I can see visible difference under my eyes no more bags when I smile now',
     MRP  :'Rs.399.00',
     Pack_Size  :'400 ml',
     Discount  :'NA',
     Key_Ingredients : ['Turmeric'],
     Category : ['Body Lotion'],
     Tokens : ['ubtan','body','lotion','turmeric','kokum','butter','glowing','skin'],
  NewLaunch:"Yes"},
  {
    Product_Name  :'Milky Soft Shampoo with Oats, Milk and Calendula for Babies',
    Product_Link  :'https://images.mamaearth.in/catalog/product/m/i/milky-soft-shampoo-1_1.jpg?format=auto&height=600',
   Rating : 5,
   Reviews  :'The perfect combo u could gift u. I have been using this for almost one month now and the darkness around my mouth is reduce and I can see visible difference under my eyes no more bags when I smile now',
   MRP  :'Rs.399.00',
   Pack_Size  :'400 ml',
   Discount  :'NA',
   Key_Ingredients : ['Turmeric'],
   Category : ['Body Lotion'],
   Tokens : ['ubtan','body','lotion','turmeric','kokum','butter','glowing','skin'],
NewLaunch:"Yes"},
]

const filteredArray=[];

const hairProducts = products.filter(product => product.Tokens.includes('hair'));
console.log(hairProducts);

const skinProducts = products.filter(product => product.Tokens.includes('skin'));
console.log(skinProducts);

const vitamin_C_Products = products.filter(product => product.Tokens.includes('vitamin'));
console.log(vitamin_C_Products);

const newLaunchProducts = products.filter(product => product.NewLaunch=='Yes');
console.log("new launch product:--",newLaunchProducts);

function displayProducts(products, containerId) {
    const productsContainer = document.querySelector(`.${containerId}`);
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-wraper">
                <img src="${product.Product_Link}" alt="${product.Product_Name}" /> 
                <h4>${product.Product_Name}</h4>
                <h5>${product.Category}</h5>
                <p>
                    <i class="fa-solid fa-star"></i>${product.Rating} 
                    <i class="fa-solid fa-circle-check"></i> ${product.Pack_Size} reviews
                </p>
                <h2>Rs. ${product.MRP}</h2>
                <button>ADD TO CART</button>
            </div>
        `;
    });
}

function scrollProducts(containerId, direction) {
    const container = document.querySelector(`.${containerId}`);
    const scrollAmount = 300; 
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products, 'best-sellers-container'); 
    displayProducts(hairProducts, 'hair-care-container');
    displayProducts(skinProducts, 'skin-care-container');
    displayProducts(vitamin_C_Products, 'vitamin-c-container');
});

function filteroutArray(filteritem){
  if(filteritem=='all'){
    const skinProducts = products.filter((product)=>{
      return product.NewLaunch=='Yes';
    });
    displayProducts(skinProducts, 'new_launch_container');
  }
  else{
    const skinProducts = products.filter((product)=>{
      return (product.Tokens.includes(filteritem) && product.NewLaunch=='Yes');
    });
    displayProducts(skinProducts, 'new_launch_container');
  }
}

displayProducts(newLaunchProducts, 'new_launch_container');





document.addEventListener('DOMContentLoaded', () => {
    const userinput = document.getElementById('userinput');
    const searchbtn = document.querySelector('.searchbtn');

    if (userinput && searchbtn) {
        userinput.addEventListener('input', showSearchedData);

        searchbtn.addEventListener('click', function(){
            console.log('Search button clicked');
            showSearchedData();
        });
    } else {
        console.error('userinput or searchbtn element not found');
    }
});

function showSearchedData() {
    const userinput = document.getElementById('userinput');
    const inputvalue = userinput.value.trim().toLowerCase();
    console.log('showsearchfunction is runing:-');
    const filteredProducts = products.filter(product => 
        product.Tokens.some(token => token.includes(inputvalue))
    );
console.log(filteredProducts);
    searchedProduct(filteredProducts);
}

function searchedProduct(products) {
    const userinput = document.getElementById('userinput');
    const productsContainer = document.querySelector('.wrap_searched_product');
    productsContainer.innerHTML = '';
    let arrayelement=Array.from(products);
    let items=arrayelement.length;
    let resultarray=document.querySelector('#resultarray');
    resultarray.innerText=`${items} ${userinput.value} products found`;

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-wraper">
                <img src="${product.Product_Link}" alt="${product.Product_Name}" /> 
                <h4>${product.Product_Name}</h4>
                <h5>${product.Category}</h5>
                <p>
                    <i class="fa-solid fa-star"></i>${product.Rating} 
                    <i class="fa-solid fa-circle-check"></i> ${product.Pack_Size} reviews
                </p>
                <h2>Rs. ${product.MRP}</h2>
                <button>ADD TO CART</button>
            </div>
        `;
    });
    const parentsection = document.querySelector('.parentsection');
    parentsection.style.display = 'none';
}

var checkicon = true;
function displaysidebar() {
    const sidebar = document.querySelector('.vertical_nav');
    if (checkicon) {
        sidebar.style.display = 'none';
        checkicon = false;
    } else {
        sidebar.style.display = 'block';
        checkicon = true;
    }
}


