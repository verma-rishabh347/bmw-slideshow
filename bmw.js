    let car=
    {
        sedan:
        {
            photos:["m2.png","z4.avif","m32.png","m4.png","m5.png"],
            discription:["The BMW M2 is a high-performance coupe with a 3.0L twin-turbo inline-6 engine, producing around 453-480 horsepower and 550-600 Nm of torque, depending on the model year and specific variant. Key features include a rear-wheel-drive layout, optional manual transmission, upgraded suspension, and aggressive styling with flared arches and quad exhausts.","The BMW Z4 is a two-seater convertible roadster with a 2998 cc, 6-cylinder turbocharged engine that produces up to \(340\) HP and \(500\) Nm of torque. It features rear-wheel drive, an 8-speed automatic transmission, and a top speed of around \(240\) kmph. Key features include Adaptive M Suspension, M Sport Differential, and advanced driver assistance systems like Active Park Distance Control and a rear-view camera.","The BMW 3 Series is a sedan with various engine options, including turbocharged petrol and diesel engines, available in different transmissions like automatic. It features a premium interior with modern tech like a large touchscreen and digital driver's display, along with safety features such as airbags and advanced driver-assistance systems. Key specifications include a length of around \(4709\) mm and a bootspace of $480$L","The BMW M4 is a high-performance sports coupe with various models available, such as the M4 Competition and M4 CS, all featuring a powerful twin-turbo inline 6-cylinder petrol engine. Key details include up to 530 hp in the Competition model (or 551 hp in the CS model), available with rear-wheel or M xDrive all-wheel drive, and an 8-speed M Steptronic transmission","The BMW 5 Series is a luxury sedan available with turbocharged petrol and diesel engines, paired with an 8-speed automatic transmission. It features a modern interior with a 14.9-inch touchscreen, a 12.3-inch digital driver's display, and premium amenities like a panoramic sunroof, four-zone climate control, and ambient lighting"]
        },
        motercycle:
        {
            photos:["g310r2.avif","g310rr.png","s10003.avif","s120.avif","m1.avif"],
            discription:["The BMW G 310 R is an entry-level roadster with a 313cc single-cylinder engine producing 34 PS and 28 Nm of torque. It features a water-cooled, four-stroke engine, upside-down front forks, LED lighting, a digital instrument cluster, and a 11-liter fuel tank. Recent models include a ride-by-wire throttle, slipper clutch, and improved ergonomics for a more refined and agile ride","The BMW G 310 RR is a 313cc, single-cylinder, liquid-cooled sport motorcycle with a 34 PS max power and 27.3 Nm max torque. Key features include a 6-speed manual transmission, dual-channel ABS, an upside-down fork, and a digital instrument console. The bike has a top speed of 160 km/h, a kerb weight of 174 kg, and a 11-liter fuel tank. ","The BMW S 1000 R is a naked sports bike with a 999cc inline-four engine producing 167.6 to 170 hp and 114 Nm of torque. Key details include a kerb weight of 199 kg, a top speed of over 200 km/h (electronically limited to 250 km/h in some versions), and features like ABS Pro, Dynamic Traction Control, and a TFT display with connectivity. ","The BMW S1000RR is a high-performance superbike featuring a 999cc inline-four engine with BMW ShiftCam technology, producing 210 hp at 13,750 rpm. Key features include a lightweight chassis, advanced electronic aids like DTC and Race-Pro modes, a 6.5-inch TFT display, and optional M Performance parts like carbon wheels. Aerodynamic winglets for increased downforce, sharper styling, and a longer windscreen are also notable updates on the latest model. ","The BMW M 1000 RR is a high-performance superbike with a 999 cc inline-four engine, producing up to \(212.10\) hp and \(113\) Nm of torque. Key features include a focus on performance with optimized aerodynamics (including winglets for downforce), a lightweight chassis, and advanced technology like a 6.5-inch TFT display, M Competition package options, and comprehensive riding aids such as traction control and multiple riding modes. "]
        },
        suv:
        {
            photos:["x1.avif","x3.webp","x4.avif","x5.avif","x7.avif"],
            discription:["The BMW X1 is a 5-seater compact SUV with both petrol and diesel engine options, a stylish design, and a range of comfort and safety features. Key details include its engine options ranging from approximately 1499 cc to 1995 cc, various power outputs, and automatic transmissions. It is equipped with features like ambient lighting, a sunroof, cruise control, and advanced safety systems including ADAS Level 1 and a comprehensive set of passive safety features","BMW X3 price: BMW X3 launched at Rs 75.80 lakh: Check details ...The BMW X3 is a mid-size SUV known for its sporty design, performance, and luxury. It typically seats five people and is available with both petrol and diesel engine options, often featuring all-wheel drive (AWD) and an automatic transmission. Key features include a large curved touchscreen, premium interior options like ambient lighting and ventilated seats","The BMW X4 is a luxury compact SUV with a coupe-like design, featuring multiple engine options, an all-wheel-drive system, and a 5-seat capacity. Key details include a 3-liter, 6-cylinder turbo petrol engine in the M40i variant that produces 360PS and 500Nm of torque, with an 8-speed automatic transmission and an 8-second 0-100 km/h acceleration time","The BMW X5 is a luxury SUV known for its powerful engines, performance, and advanced technology. Key details include its availability with both diesel and petrol engines, a four-wheel drive system, and an automatic transmission. It features a modern interior with a large curved display, and exterior elements","The BMW X7 is a luxury full-size SUV available with powerful 2998cc petrol or 2993cc diesel engines, both paired with an 8-speed automatic transmission and all-wheel drive. Key features include a panoramic glass sunroof, a spacious interior with optional captain's seats, high-tech elements like crystal headlights and Crafted Clarity glass, and advanced driver assistance systems."]
        }
    };
let i="sedan";
let j=0

function model(mod)
{
    i=mod;
    j=0;
    next();

}






function next()
{
    
    if(j>4)
    {
        j=0;
    }
    document.getElementById("image").src=car[i].photos[j];
    document.getElementById("details").innerHTML=car[i].discription[j];
    j++;
    
}
function previous()
{
    j--;
    if(j==0)
    {
        j=4;
    }
    document.getElementById("image").src=car[i].photos[j];
    document.getElementById("details").innerHTML=car[i].discription[j];
    

}
addEventListener("keydown",(e)=>
    {
        if(e.key=="ArrowLeft")
        {
            previous();
            
        }
        else if(e.key=="ArrowRight")
        {
            next();

        }
    }
);





window.onload= next;