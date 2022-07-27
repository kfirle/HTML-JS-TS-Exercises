class Generator1{
    getRandomItem(arr:Array<string>,prod_requested:number) : Product{
        let prod:Product;
        let num = Math.round(Math.random() * (arr.length-1));
        let prod_type = arr[num];
        if(prod_requested<=20){
            arr.splice(num,1);
        }
        switch(prod_type){
            case "TShirt":
                let t_shirt = new TShirt(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                t_shirt.text = this.randText();
                this.shirtValues(t_shirt);
                return t_shirt;
            case "ButtonedShirt":
                let b_shirt = new ButtonedShirt(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                b_shirt.buttons = this.randButtonsPocketsDistance();
                this.shirtValues(b_shirt);
                return b_shirt;
            case "LadiesShirt":
                let l_shirt = new LadiesShirt(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                l_shirt.fabric = this.randFabric();
                this.shirtValues(l_shirt);
                return l_shirt;
            case "Jeans":
                let j_pants = new Jeans(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                j_pants.has_tears = this.randBoolean();
                this.pantsValues(j_pants);
                return j_pants;
            case "FabricPants":
                let f_pants = new FabricPants(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                f_pants.pockets = this.randButtonsPocketsDistance();
                this.pantsValues(f_pants);
                return f_pants;
            case "ShortPants":
                let s_pants = new ShortPants(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                s_pants.fabric_type = this.randFabric();
                this.pantsValues(s_pants);
                return s_pants;
            case "Skirt":
                let skirt = new Skirt(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                skirt.type = this.randSkirtLength();
                this.womenDressValues(skirt);
                return skirt;
            case "Dress":
                let dress = new Dress(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                this.dressValues(dress);
                return dress;
            case "NightDress":
                let n_dress = new NightDress(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                n_dress.fabric = this.randFabric();
                this.dressValues(n_dress);
                return n_dress;
            case "ElegantShoes":
                let e_shoes = new ElegantShoes(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                e_shoes.material = this.randShoeMaterial();
                this.flatShoesValues(e_shoes);
                return e_shoes;
            case "SportShoes":
                let s_shoes = new SportShoes(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                s_shoes.prod_date = this.randDate();
                this.flatShoesValues(s_shoes);
                return s_shoes;
            case "ComfortShoes":
                let c_shoes = new ComfortShoes(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                c_shoes.has_foothold = this.randBoolean();
                this.flatShoesValues(c_shoes);
                return c_shoes;
            case "Heels":
                let heels = new Heels(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                heels.type = this.randHeel();
                this.shoesValues(heels);
                return heels;
            case "Jacket":
                let jacket = new Jacket(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                jacket.pockets = this.randButtonsPocketsDistance();
                this.outerwareValues(jacket);
                return jacket;
            case "Coat":
                let coat = new Coat(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                coat.is_rain_coat = this.randBoolean();
                this.outerwareValues(coat);
                return coat;
            case "Cap":
                let cap = new Cap(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                cap.has_printing = this.randBoolean();
                this.headwareValues(cap);
                return cap;
            case "Hat":
                let hat = new Hat(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                hat.height = this.randDimension();
                this.headwareValues(hat);
                return hat;
            case "Belt":
                let belt = new Belt(undefined,undefined,undefined,undefined,undefined,undefined,undefined);
                this.beltValues(belt);
                return belt;
            case "Sunglasses":
                let sunglasses = new Sunglasses(undefined,undefined,undefined,undefined,undefined);
                sunglasses.glass_color = this.randColor();
                this.glassesValues(sunglasses);
                return sunglasses;
            case "ReadingGlasses":
                let reading_glasses = new ReadingGlasses(undefined,undefined,undefined,undefined,undefined);
                reading_glasses.distance = this.randButtonsPocketsDistance();
                this.glassesValues(reading_glasses);
                return reading_glasses;
        }
        return prod;
    }

    private randColor(): string{
        let colors:string[] = ["Red", "Blue", "Green"];
        let num = Math.round(Math.random() * (colors.length-1));
        return colors[num];
    }

    private randCountry(): string{
        let countries:string[] = ["China", "Japan", "Israel"];
        let num = Math.round(Math.random() * (countries.length-1));
        return countries[num];
    }

    private randText(): string{
        let texts:string[] = ["First", "Second", "Third"];
        let num = Math.round(Math.random() * (texts.length-1));
        return texts[num];
    }

    private randFabric(): string{
        let fabrics:string[] = ["Silk", "Wool", "Cotton"];
        let num = Math.round(Math.random() * (fabrics.length-1));
        return fabrics[num];
    }

    private randManufacturer(): string{
        let manufacturers:string[] = ["Mike", "Adidos", "Diadoga"];
        let num = Math.round(Math.random() * (manufacturers.length-1));
        return manufacturers[num];
    }

    private randPrice(): number{
        const max=1000;
        let num = Math.round(Math.random() * max + 1);
        return num;
    }

    private randModel(): string{
        const ascii_of_A = 65
        const ascii_of_Z = 90
        let num = Math.round(Math.random() * (ascii_of_Z-ascii_of_A) + ascii_of_A);
        let char = String.fromCharCode(num);
        return char;
    }

    private randSizeLengthMeasurementWidthDiameter(): number{
        const max=100;
        let num = Math.round(Math.random() * max + 1);
        return num;
    }

    private randButtonsPocketsDistance(): number{
        const max=10;
        let num = Math.round(Math.random() * max + 1);
        return num;
    }

    private randBoolean(): boolean{
        let num = Math.round(Math.random());
        return num==1 ? true : false;
    }

    private randDimension(): number{
        let num = Math.round(Math.random()*2 +1);
        return num;
    }

    private randSkirtLength(): SkirtType{
        let num = Math.round(Math.random());
        return num==1 ? SkirtType.Short : SkirtType.Long;
    }

    private randShoeMaterial(): Material{
        let materials:Material[] = [Material.fabric, Material.leather, Material.zamsh];
        let num = Math.round(Math.random() * (materials.length -1));
        return materials[num];
    }

    private randHeel(): HeelsType{
        let types:HeelsType[] = [HeelsType.high, HeelsType.low, HeelsType.medium];
        let num = Math.round(Math.random() * (types.length -1));
        return types[num];
    }

    private randBuckleMaterial(): BuckleMaterial{
        let types:BuckleMaterial[] = [BuckleMaterial.fabric, BuckleMaterial.leather, BuckleMaterial.plastic,
            BuckleMaterial.steel];
        let num = Math.round(Math.random() * (types.length -1));
        return types[num];
    }

    private randDate() :Date{
        let day = Math.round(Math.random() * 28);
        let month:number = Math.round(Math.random() * 12);
        let year = Math.round(Math.random() * 22 + 2000);
        let date:Date = new Date();
        date.setFullYear(year,month,day);
        return date;
    }

    private productValues(prod:Product) : void{
        prod.price = this.randPrice();
        prod.manufacturer = this.randManufacturer();
        prod.model = this.randModel();
    }

    private shirtValues(shirt:Shirt) : void{
        shirt.size = this.randSizeLengthMeasurementWidthDiameter();
        shirt.color = this.randColor();
        shirt.sleeves_length = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(shirt);
    }

    private pantsValues(pants:Pants) : void{
        pants.size = this.randSizeLengthMeasurementWidthDiameter();
        pants.color = this.randColor();
        pants.length = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(pants);
    }

    private womenDressValues(womenDress:WomenDress) : void{
        womenDress.size = this.randSizeLengthMeasurementWidthDiameter();
        womenDress.color = this.randColor();
        womenDress.measurement = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(womenDress);
    }

    private dressValues(dress:Dress) : void{
        dress.length = this.randSizeLengthMeasurementWidthDiameter();
        dress.is_bare = this.randBoolean();
        this.womenDressValues(dress);
    }

    private shoesValues(shoes:Shoes) : void{
        shoes.size = this.randSizeLengthMeasurementWidthDiameter();
        shoes.color = this.randColor();
        shoes.country = this.randCountry();
        this.productValues(shoes);
    }

    private flatShoesValues(flat_shoes:FlatShoes) : void{
        flat_shoes.has_shoe_laces = this.randBoolean();
        this.shoesValues(flat_shoes);
    }

    private outerwareValues(outerware:Outerware) : void{
        outerware.size = this.randSizeLengthMeasurementWidthDiameter();
        outerware.color = this.randColor();
        outerware.thickness = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(outerware);
    }

    private headwareValues(headware:Headware) : void{
        headware.size = this.randSizeLengthMeasurementWidthDiameter();
        headware.color = this.randColor();
        headware.diameter = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(headware);
    }

    private beltValues(belt:Belt) : void{
        belt.dimensions = new Dimensions(this.randDimension(),this.randDimension(),this.randDimension());
        belt.belt_color = this.randColor();
        belt.buckle_color = this.randColor();
        belt.buckle_material = this.randBuckleMaterial();
        this.productValues(belt);
    }

    private glassesValues(glasses:Glasses) : void{
        glasses.frame_color = this.randColor();
        this.productValues(glasses);
    }    

    //let values = new Map<string, string | number>();
    //values.set("price",this.randPrice());
}