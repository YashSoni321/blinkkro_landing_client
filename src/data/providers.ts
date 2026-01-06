export interface Product {
    id: string;
    name: string;
    description: string;
    price?: string;
    image?: string;
}

export interface Provider {
    id: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    rating: number;
    reviews: number;
    address: string;
    contact: string;
    images: string[];
    products: Product[];
}

export const providers: Provider[] = [
    {
        id: '1',
        slug: 'mittal-electronics',
        name: 'Mittal Electronics',
        category: 'Electronics',
        description: 'Your one-stop shop for all electronic needs. We sell the best quality home appliances.',
        rating: 4.5,
        reviews: 120,
        address: '123, Tech Street, Jaipur',
        contact: '+91 98765 43210',
        images: ['https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2601&auto=format&fit=crop'],
        products: [
            { id: 'e1', name: 'Smart LED TV', description: '55 inch 4K Ultra HD Smart LED TV', price: '₹45,000' },
            { id: 'e2', name: 'Washing Machine', description: 'Fully Automatic Front Load Washing Machine', price: '₹30,000' },
            { id: 'e3', name: 'Refrigerator', description: 'Double Door Frost Free Refrigerator', price: '₹25,000' },
            { id: 'e4', name: 'Microwave Oven', description: 'Convection Microwave Oven', price: '₹10,000' },
            { id: 'e5', name: 'Air Conditioner', description: '1.5 Ton 5 Star Split AC', price: '₹35,000' },
            { id: 'e6', name: 'Home Theater', description: '5.1 Channel Home Theater System', price: '₹15,000' },
        ]
    },
    {
        id: '2',
        slug: 'mittal-tutions',
        name: 'Mittal Tutions',
        category: 'Education',
        description: 'Expert tuition services for school and college students. Qualified teachers and personal attention.',
        rating: 4.8,
        reviews: 85,
        address: '456, Knowledge Park, Jaipur',
        contact: '+91 98765 12345',
        images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2670&auto=format&fit=crop'],
        products: [
            { id: 't1', name: 'Mathematics Class', description: 'Advanced Mathematics for Class 10th and 12th', price: '₹2,000/month' },
            { id: 't2', name: 'Science Class', description: 'Physics, Chemistry, and Biology tutoring', price: '₹2,500/month' },
            { id: 't3', name: 'English Spoken', description: 'Crash course for Spoken English', price: '₹5,000/course' },
            { id: 't4', name: 'Competitive Exams', description: 'Coaching for JEE and NEET', price: '₹50,000/year' },
            { id: 't5', name: 'Computer Science', description: 'Programming basics in Python and Java', price: '₹3,000/month' },
        ]
    },
    {
        id: '3',
        slug: 'mittal-ecommerce',
        name: 'Mittal Ecommerce',
        category: 'Retail',
        description: 'Online store for fashion, accessories, and home decor items. Best prices guaranteed.',
        rating: 4.2,
        reviews: 200,
        address: '789, Market Road, Jaipur',
        contact: '+91 98765 67890',
        images: ['https://images.unsplash.com/photo-1472851294608-415522f96385?q=80&w=2670&auto=format&fit=crop'],
        products: [
            { id: 'c1', name: 'Men\'s T-Shirt', description: 'Cotton Printed T-Shirt', price: '₹500' },
            { id: 'c2', name: 'Jeans', description: 'Slim Fit Denim Jeans', price: '₹1,200' },
            { id: 'c3', name: 'Sneakers', description: 'Casual White Sneakers', price: '₹1,500' },
            { id: 'c4', name: 'Watch', description: 'Analog Wrist Watch', price: '₹2,000' },
            { id: 'c5', name: 'Backpack', description: 'Laptop Backpack with USB Port', price: '₹1,000' },
            { id: 'c6', name: 'Wallet', description: 'Leather Wallet for Men', price: '₹800' },
        ]
    }
];
