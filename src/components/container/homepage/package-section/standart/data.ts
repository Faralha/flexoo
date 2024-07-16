type PackageDetails = {
    detail: string,
    isincluded: boolean
}

export type Package = {
    type: string,
    price: string,
    packageDetails: PackageDetails[]
}

export const standartPackageData: Package[] = [
    {
        type: "Silver",
        price: "1 Juta",
        packageDetails: [
            {
                detail: "Free Domain",
                isincluded: false,
            },
            {
                detail: "Responsive Web",
                isincluded: true,
            },
            {
                detail: "Free Set up Hosting & Domain",
                isincluded: true,
            },
            {
                detail: "3 Pages",
                isincluded: true,
            },
            {
                detail: "UI/UX Design",
                isincluded: false,
            },
        ]
    },
    {
        type: "Golden",
        price: "2.5 Juta",
        packageDetails: [
            {
                detail: "Free Domain",
                isincluded: true,
            },
            {
                detail: "Responsive Web",
                isincluded: true,
            },
            {
                detail: "Free Set up Hosting & Domain",
                isincluded: true,
            },
            {
                detail: "6 Pages",
                isincluded: true,
            },
            {
                detail: "UI/UX Design",
                isincluded: true,
            },
        ]
    },
    {
        type: "Platinum",
        price: "4 Juta",
        packageDetails: [
            {
                detail: "Free Domain",
                isincluded: true,
            },
            {
                detail: "Responsive Web",
                isincluded: true,
            },
            {
                detail: "Free Set up Hosting & Domain",
                isincluded: true,
            },
            {
                detail: "12 Pages",
                isincluded: true,
            },
            {
                detail: "UI/UX Design",
                isincluded: true,
            },
        ]
    },

]