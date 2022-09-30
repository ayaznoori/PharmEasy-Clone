import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({handlePage,page}) => {
  return (
    <Stack direction="horizontal" justify="center" gap="20px" paddingTop="20px">
        <Button variant="outline" disabled={page===1} onClick={() => handlePage(page-1)}
        colorScheme='teal' height="30px" width="60px">Prev</Button>
        <Button variant="outline" onClick={() => handlePage(page+1)}
        colorScheme='teal' height="30px" width="60px">Next</Button>
    </Stack>
  )
}

export default Pagination