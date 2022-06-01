import React, { useEffect } from "react";

import useHttp from "../hooks/use-http";
import _ from "lodash";
import { Card } from "react-bootstrap";

const City = (props) => {
    const { getData, isLoading, isError, url } = useHttp();

    useEffect(() => {
        getData(props.city, props.type);
    }, [getData, props.city, props.type]);

    return (
        <Card
            className="text-center"
            style={{ width: "30rem", height: "20rem", margin: '10px' }}
        >
            <Card.Header style={{height: '250px'}}>
                {isLoading && !isError && <Card.Text>Loading...</Card.Text>}
                {!isLoading && !isError && (
                    <Card.Img variant='top' src={url} alt={""} width="auto" height="230" />
                )}
                {!isLoading && isError && (
                    <Card.Text style={{ color: "red" }}>
                        Something went wrong...
                    </Card.Text>
                )}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {_.capitalize(props.type)} in {props.city}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default City;
