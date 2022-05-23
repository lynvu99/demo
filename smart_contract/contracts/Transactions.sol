// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Transactions {
    constructor() {}

    uint256 transactionCounter;

    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint Amount;
        string Message;
        uint256 Timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function sendToBlockchain(
        address payable _receiver,
        uint amount,
        string calldata message,
        string calldata keyword
    ) public payable {
        transactionCounter += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                _receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        (bool success, ) = _receiver.call{value: amount}("");
        if (!success) {
            revert("Fail");
        }
        
        emit Transfer(
            msg.sender,
            _receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        //return transactions
        return transactions;
    }

    function transactionsCount() public view returns (uint256) {
        return transactionCounter;
    }
}
