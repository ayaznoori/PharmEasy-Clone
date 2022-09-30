import { Box, Grid, Heading, Image, Input, Radio, Select, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import AppSection from './AppSection';
import styles from "./beauty.module.css"
import Pagination from './Pagination';

const Beauty = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(+(searchParams.get("page")) || 1);
    const [min, setMin] = useState("")
    const [max, setMax] = useState("");

    const handleSorting = (e) => {
        setSort(e.target.value);
    }

    const handlePage = (page) => {
        setPage(page);
    }

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    useEffect(() => {
        const getData = () => {
            setLoading(true);
            const axios = require("axios");
    
            const options = {
                method: 'GET',
                url: 'https://sephora.p.rapidapi.com/products/list',
                params: {categoryId: 'cat150006', pageSize: '21', currentPage: `${page}`, 
                sortBy: `${sort}`,pl: `${min}`, ph: `${max}`},
                headers: {
                  'X-RapidAPI-Key': 'd935b50fe5mshc98928912178808p1694f7jsnfb5b01e16451',
                  'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
                }
              };
            axios.request(options).then(function (response) {
                setData(response.data.products);
                setLoading(false);
            }).catch(function (error) {
                console.error(error);
            });
        }
        getData();
    },[sort,page,min,max])

    useEffect(() => {
        setSearchParams({
            page,
        })
    },[page,setSearchParams])
  return (
    <div>
        <div className={styles.container}>
            <Stack direction="horizontal" gap="50px">
                <Stack width="25%" textAlign="left">
                    <Heading fontSize="26px" fontWeight="600" marginBottom="40px">Filter</Heading>
                    <Heading fontSize="16px" fontWeight="700">Category</Heading>
                    <Stack direction="horizontal" justify="space-between" 
                    align="center" paddingTop="15px" paddingBottom="25px">
                        <Text fontSize="14px">Beauty</Text>
                        <Radio type="radio" colorScheme='teal' isChecked size="lg"/>
                    </Stack>
                    <hr/>
                    <Heading fontSize="16px" fontWeight="700" paddingTop="30px">Price</Heading>
                    <Stack direction="horizontal" justify="space-between" 
                    align="center" paddingTop="25px">
                        <Input type="text" variant="outline" width="100px"
                        placeholder="min" onChange={(e) => setMin(e.target.value)}/>
                        <Heading fontSize="25px" fontWeight="400" color="gray.400">-</Heading>
                        <Input type="text" variant="outline" width="100px"
                        placeholder="max" onChange={(e) => setMax(e.target.value)}/>
                    </Stack>
                </Stack>
                <Stack width="75%">
                    <Stack direction="horizontal" marginBottom="40px" 
                    justify="space-between" align="center">
                        <Heading fontSize="26px" fontWeight="600">Beauty</Heading>
                        <Stack direction="horizontal" gap="40px" align="center">
                            <Text fontSize="14px" width="60px">Sort By:</Text>
                            <Select width="248px" height="39px" onChange={handleSorting}>
                                <option value="">Popularity</option>
                                <option value="price:0">Price Low to High</option>
                                <option value="price:1">Price High to Low</option>
                            </Select>
                        </Stack>
                    </Stack>
                    {loading ? 
                    <Box width="100%" style={{display:"flex", justifyContent:"center"}}>
                        <Image width="150px" 
                        src="https://media0.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47536zmw7vnywwf4ll75fj0otdkp05q4dzjop9597f&rid=giphy.gif&ct=g"/>
                    </Box>
                    :
                    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                        {data.map((item,i) => (
                            <Box key={i} height="350px" width="230px" padding="10px" border="1px solid #e1e1e1"
                            borderRadius="7px" position="relative">
                                <Box padding="20px" style={{display:"flex", justifyContent:"center"}}>
                                    <Image src={item.heroImage}/>
                                </Box>
                                <Heading marginTop="20px" fontSize="16px" fontWeight="700">
                                    {item.displayName}
                                </Heading>
                                <Heading fontSize="17px" fontWeight="600"
                                position="absolute" bottom="20px">
                                    {item.currentSku.salePrice==="" ? item.currentSku.listPrice
                                    : item.currentSku.salePrice }
                                </Heading>
                            </Box>
                        ))}
                    </Grid>
                    }
                    {!loading ? 
                    <Pagination handlePage={handlePage} page={page}/>
                    : ""}
                </Stack>
            </Stack>
        </div>
        <hr className={styles.hr}/>
        <Box width="60%" marginLeft="15%">
            <Image src='https://i.postimg.cc/4xLJD6Cb/Screenshot-2022-07-23-at-1-02-22-PM.png'
            height="70px" margin="auto" width="67%"/>
            <Stack direction="horizontal" justify="space-between" gap="50px" textAlign="left"
            width="85%" margin="auto" marginLeft="160px" marginTop="30px">
                <Stack width="30%">
                    <Heading fontSize="16px" fontWeight="700" color="gray.600">
                        1 Lakh+ Products
                    </Heading>
                    <Text fontSize="16px" fontWeight="400" color="gray.500">
                        We maintain strict quality controls on all our partner retailers, 
                        so that you always get standard quality products.
                    </Text>
                </Stack>
                <Stack width="32%">
                    <Heading fontSize="16px" fontWeight="700" color="gray.600">
                        Secure Payment
                    </Heading>
                    <Text fontSize="16px" fontWeight="400" color="gray.500">
                        100% secure and trusted payment protection
                    </Text>
                </Stack>
                <Stack width="36%">
                    <Heading fontSize="16px" fontWeight="700" color="gray.600">
                        Easy Return
                    </Heading>
                    <Text fontSize="16px" fontWeight="400" color="gray.500">
                        We have a new and dynamic return window policy for medicines and healthcare 
                        items. Refer FAQs section for more details.
                    </Text>
                </Stack>
            </Stack>
        </Box>
        <hr className={styles.hr}/>
        <AppSection/>
    </div>
  )
}

export default Beauty