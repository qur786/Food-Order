import { useContext, useEffect, useState } from "react";
import { CartIcon } from "../CartIcon";
import { CartContext } from "../Contexts";
import type { HTMLProps } from "react";
import classes from "./index.module.css";

interface CartButtonProps {
  onClick: HTMLProps<HTMLButtonElement>["onClick"];
}

export function CartButton({ onClick }: CartButtonProps) {
  const { items } = useContext(CartContext);
  const [isBump, setIsBump] = useState(false);
  const totalItems = items.reduce((curr, ele) => curr + ele.amount, 0);
  const btnClassses = `${classes.button} ${
    isBump === true ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length > 0) {
      setIsBump(true);
    }

    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClassses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
}
